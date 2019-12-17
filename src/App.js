import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import Subscribe from './components/Subscribe'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <nav>
          <h1>Adventure Park</h1> 
        </nav>
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
