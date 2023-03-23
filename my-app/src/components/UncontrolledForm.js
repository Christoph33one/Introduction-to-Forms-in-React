import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
        // creating a Ref
        this.inputName = React.createRef();
        this.inputCatergoy = React.createRef();
        this.inputComments = React.createRef();
    }
    handleNameChange = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCatergoy.current.value)
        console.log(this.inputComments.current.value)
    }
    
    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            id="id-name"
                            name="name"
                            type="text"
                            ref={this.inputName}
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select
                            id="id-category"
                            name="category"
                            ref={this.inputCatergoy}
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
                            ref={this.inputComments}
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
