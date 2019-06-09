import React from 'react';


export default class Home extends React.Component {
    clickHandler = () => {
        console.log('button clicked');
    }
    render() {
        return (
            <div>
                <h1>
                    Home Page
                </h1>
                <button
                    onClick={this.clickHandler}
                >Click me</button>
            </div>
        )
    }
}