import React from 'react';

class ExpressExperiment extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ hi: 'Hello from 3000' })
        };
        fetch('/', options)
            // .then(response => response.json())
            // .then(jsonResponse => console.log(JSON.stringify(jsonResponse)));
            .then(response => response.text())
            .then(responseText => console.log(responseText));
    }

    render() {
        return (
            <div>
                <h1>Click the button below to make a POST request</h1>
                <button onClick={this.onClick}>
                    Click me!
                </button>
            </div>
        );
    }
}

export default ExpressExperiment;
