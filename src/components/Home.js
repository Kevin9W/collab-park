import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div className="Home">
        <div>
          <div></div>
          <h1>Welcome to Adventure Park</h1>
          <img className="big_pic" src="href" alt="Adventrue Park"/>
        </div>
        <p>Sign Up for out newsletter to recieve exclusive discounts and updates!</p>
        <div>
          <h2>New Attractions!</h2>
          <img className="ride_pic1" src="href" alt="Ride 1"/>
          <img className="ride_pic2" src="href" alt="Ride 2"/>        
        </div>
      </div>
    ) 
  }
}

export default Home