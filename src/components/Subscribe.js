import React from 'react';
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown'

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
    console.log(this.state.events)
    console.log(this.state.discounts)
    console.log(this.state.news_updates)

  }

  addData=(event)=>{
    let type=event.target.type
    let name=event.target.name
    let value
    if (type==="text"){
      value=event.target.value
    }
    else if(type==="checkbox"){
      value=event.target.checked
    }
    let data={[name]:value}
    this.setState(data)
  }

  testing=(event)=>{
    console.log(event.target)
  }
  render(){
    let options=['Monthly','Quarterly','Annually']
    let defaultOption=options[0]
    return(
      <div className="sub_main">
        <div className="sub_form">
          <Link to="/">Home </Link>          
          <h1>Subscribe to our newsletter</h1>
          <form onSubmit={this.addSub}>
            <label>First Name</label><input
              className="input_box"
              type="text"
              name="first_name"  
              onChange={this.addData}
            />
            <label>Last Name</label><input
              className="input_box"
              type="text"
              name="last_name"  
              onChange={this.addData}
            />
            <label>Email</label><input
              className="input_box"
              type="text"
              name="email"  
              onChange={this.addData}
            />
            <label><input type="checkbox" className="input_box" name="events" onClick={this.addData}/>Events</label>
            <label><input type="checkbox" className="input_box" name="discounts" onClick={this.addData}/>Discounts</label>
            <label><input type="checkbox" className="input_box" name="news_updates" onClick={this.addData}/>Parks news & updates</label>
            <select type="dropdown" className="drop-menu" name="events">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </select>
            <button type="submit">Subscribe</button>
          </form>          
        </div>
      </div>
    )
  }
}
export default Subscribe;
