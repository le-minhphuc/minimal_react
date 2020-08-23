import React from 'react';

class PersonalInformationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value : "Initial text" };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // no value in a submit event
    handleSubmit(event) {
        alert(this.state.value);
        // QNS: I know that this prevents event from bubbling up the JS DOM, but why is it
        // necessary to prevent submit event from bubbling up the DOM?
        //
        // ANS: without this line, web page will automatically refresh,
        // and form value will be reset to its initial value. 'window' object seems to have
        // a default submit event handler that refreshes the page.
        //
        // If we don't want the page to be reset and the form to retain the value when
        // our user clicks submit, we must prevent submit event from bubbling up to window
        // object.
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default PersonalInformationForm;
