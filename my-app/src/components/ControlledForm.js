import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             category: 'website',
             comments: '',
        }
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    // passing event as parameters. event will be the onChange event handler
    // form input does not except characters in the form field, to make this work do the following
    // update the state using setState and give name the newValue. 
    // now when the event is trigger it will expect what ever is in the form field
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    // handle submit method wil stop the DOM from reloading the page once the user clicks submit.
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            id="id-name"
                            name="name"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select
                            id="id-category"
                            name="category"
                            value={this.state.category}
                            onChange={this.handleCategoryChange}
                        >
                            <option value="website">Website issue</option>
                            <option value="order">Order issue</option>
                            <option value="general">General inquiry</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea
                            id="id-comments"
                            name="comments"
                            value={this.state.comments}
                            onChange={this.handleCommentsChange}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm
// giving react controll of the for and not the DOM
// adding a state with a property of name with an emply string vaule
// then giving the input a value of the state.name



