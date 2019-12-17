import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Subscribe from './components/Subscribe'
import './Home.css'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div id="grid1">
          <div className="nav-left">
            <img className="toprow1" src="./images/topleft.png" alt="Adventrue Park"/>
          </div>
          <div className="nav-right">
            <img className="toprow2" src="./images/topright.png" alt="Adventrue Park"/>
          </div>
        </div>  
        <div id="grid2">
          <div className="nav-left">
            <img className="botrow1" src="./images/botleft.png" alt="Adventrue Park"/>
          </div>
          <div className="nav-right">
            <img className="botrow2" src="./images/botright.png" alt="Adventrue Park"/>
          </div>
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/subscribe" component={Subscribe}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

