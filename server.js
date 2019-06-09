import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { ChunkExtractor } from '@loadable/server';
const path = require('path');

import App from './src/App';

const app = express();
const statsFile = path.resolve('./build/loadable-stats.json');
const extractor = new ChunkExtractor({ statsFile, entrypoints: ["client"] });

app.use(bodyParser.json());
app.use(express.static('build'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const context = {}
    console.log(`url: ${req.url}`);
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );
    const content = ReactDOMServer.renderToString(extractor.collectChunks(jsx));
    console.log(content);
    const html = `
        <html>
            <head>
                <body>
                    <div id="root">
                        ${content}
                    </div>
                    ${extractor.getScriptTags()}
                </body>
            </head>
        </html>
    `;
    res.send(html);
});


app.listen(port, () => {
    console.log(`running on port: ${port}`);
});