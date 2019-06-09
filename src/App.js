import React from 'react';
import loadable from '@loadable/component';

import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

const Home = loadable(() => import(/* webpackChunkName: "home" */ './components/Home'));
const About = loadable(() => import(/* webpackChunkName: "about" */ './components/About'));

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </React.Fragment>
        );
    }
}