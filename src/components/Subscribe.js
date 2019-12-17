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
    frequency:null,
  }

  fetchPost=()=>{
    let initialState={
      first_name:null,
      last_name:null,
      email:null,
      events:false,
      discounts:false,
      news_updates:false,
      frequency:null,
    }
    fetch("http://localhost:3000/api/signup",{
      headers:{
        'Content-Type':'application/json'
      },
      method:"POST",
      body: JSON.stringify(this.state)
    })
      .then(response=>this.setState(initialState))
    alert("Thank you for subscribing")
  }
  addSub=(event)=>{
    event.preventDefault()
    this.fetchPost()
  }
  addData=(event)=>{
    let type=event.target.type
    let name=event.target.name
    let value
    if (type==="text"||type==="select-one"){
      value=event.target.value
    }
    else if(type==="checkbox"){
      value=event.target.checked
    }

    let data={[name]:value}
    this.setState(data)
  }

  testing=(event)=>{
    console.log(event.target.type)
  }
  render(){
    return(
      <div className="sub_main">
        <div className="sub_form">
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
            <p>I would like the newsletter:</p>
            <select type="dropdown" className="drop-menu" name="frequency" onChange={this.addData}>
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Annually</option>
            </select>
            <p>For more information on how we process and protect your personal data, please see our <Link to="/privacy_policy">privacy policy</Link></p>
            <button type="submit">Subscribe</button>
            <button><Link to="/">Cancel</Link></button>
          </form>          
        </div>
      </div>
    )
  }
}
export default Subscribe;
