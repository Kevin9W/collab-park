import React from 'react';
import {Link} from 'react-router-dom'

class Subscribe extends React.Component{
  state={
    first_name:null,
    last_name:null,
    email:null,
    events:false,
    discounts:false,
    news_updates:false,
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
  addEvents=(event)=>{
    console.log(event.target.checked)
  }

  render(){
    return(
      <div className="sub_main">
        <div className="sub_form">
          <Link to="/">Home </Link>          
          <h1>Subscribe to our newsletter</h1>
          <form onSubmit={this.addSub}>
            <label>First Name</label><input
              className="input_box"
              type="text"  
              onChange={this.addFirstName}
            />
            <label>Last Name</label><input
              className="input_box"
              type="text"  
              onChange={this.addLastName}
            />
            <label>Email</label><input
              className="input_box"
              type="text"  
              onChange={this.addEmail}
            />
            <label><input type="checkbox" onClick={this.addEvents}/>Events</label>
            <input type="checkbox" className="input_box" name="discount"/><label>Discounts</label>
            <input type="checkbox" className="input_box" name="news_updates"/><label>Parks news & updates</label>

            <button type="submit">Subscribe</button>
          </form>          
        </div>
      </div>
    )
  }
}
export default Subscribe;
