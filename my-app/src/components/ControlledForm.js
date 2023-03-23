import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: ''
         
      }
    }
    // passing event as parameters. event will be the onChange event handler
    // form input does not except characters in the form field, to make this work do the following
    // update the state using setState and give name the newValue. 
    // now when the event is trigger it will expect what ever is in the form field
    handlenNamechange = (event) => {
        this.setState ({
            name: event.target.value
        })

    }
  render() {
    return (
      <div>
        <form>
            <label htmlFor='id-name'>Name</label>
            <input value={this.state.name} 
            onChange={this.handlenNamechange}
            id="id-name" name="name" 
            type="text" />
            <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
// giving react controll of the for and not the DOM
// adding a state with a property of name with an emply string vaule
// then giving the input a value of the state.name

export default ControlledForm