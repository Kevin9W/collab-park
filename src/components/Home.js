import React from 'react';
import {Link} from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div id="content">
        <div className="Home">
          <h1>Welcome to Adventure Park</h1>
          <img className="big_pic" src="../images/KentuckyKingdom.png" alt="Adventrue Park"/>
        </div>
        <div className="Middle">
        <button className="Button"><Link to='/subscribe'>Sign up for our newsletter</Link></button> 
        <p>
          to receive discounts and updates!
        </p>
        </div>
        <div className="bottom">
          <h2>New Attractions!</h2>
          <img className="ride_pic1" src="../images/roller-coaster.jpg" alt="Ride 1"/>
          <img className="ride_pic2" src="../images/AmusementRoundup.jpg" alt="Ride 2"/>        
        </div>
      </div>
    ) 
  }
}

export default Home