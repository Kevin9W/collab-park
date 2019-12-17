import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div className="Home">
        <div>
          <h1>Welcome to Adventure Park</h1>
          <img className="big_pic" src="href" alt="Adventrue Park"/>
        </div>
        <h3>Sign Up for out newsletter to recieve exclusive discounts and updates!</h3>
        <div>
          <h2>New Attractions</h2>
          <img className="ride_pic1" src="href" alt="Ride 1"/>
          <img className="ride_pic2" src="href" alt="Ride 2"/>        
        </div>
      </div>
    ) 
  }
}

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

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <nav>
          <h1>Adventure Park</h1> 
          <Link to="/">Home </Link>
          <Link to="/subscribe">Sign Up</Link>
        </nav>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/subscribe" component={Subscription}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
