import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

class Subscription extends React.Component{
  state={
    first_name:null,
    last_name:null,
    email:null,
    events:false,
    discounts:false,
    news_updates:false
  }

  addSub=(event)=>{
    event.preventDefault()
    console.log(this.state.first_name)
    console.log(this.state.last_name)    
    console.log(this.state.email)
  }
  
  addFirstName=(event)=>{
    let first_name=event.target.value
    this.setState({first_name})
  }
  addLastName=(event)=>{
    let last_name=event.target.value
    this.setState({last_name})
  }
  addEmail=(event)=>{
    let email=event.target.value
    this.setState({email})
  }

  render(){
    return(
      <div className="sub_main">
        <div className="sub_form">
          <h1>Subscribe to our newsletter</h1>
          <form onSubmit={this.addSub}>
            <input
              className="input_box"
              type="text"  
              placeholder="First Name"
              onChange={this.addFirstName}
            />
            <input
              className="input_box"
              type="text"  
              placeholder="Last Name"
              onChange={this.addLastName}
            />
            <input
              className="input_box"
              type="text"  
              placeholder="Email"
              onChange={this.addEmail}
            />
            <button type="submit">Subscribe</button>
          </form>          
        </div>
      </div>
    )
  }
}
