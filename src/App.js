import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Data from './components/Data';
import Info from './components/Info';
import Landing from './components/Landing';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Landing}/>
          <Route path="/data" component={Data} />
          <Route path="/info" component={Info} />
        </div>
      </Router>
    );
  }
}

export default App;
