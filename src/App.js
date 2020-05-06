import React, { Component, Fragment  } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Data from './components/pages/Data';
import Info from './components/pages/Info';
import Landing from './components/pages/Landing';



class App extends Component {
    state = {
        macros: [],
        day : '',
        type: '',
        food: '',
        protein: '',
        carbs: '',
        fat: '',
        calories: '',
        error: ''
    };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    })
  }
  calculateMacros = event => {
    event.preventDefault();
    let { day, type, food, protein, carbs, fat } = this.state;
    const macroData = {
      day, type, food, protein, carbs, fat
    }
    this.setState({ 
      macros: [macroData]
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route path="/" exact component={Landing}/>
          {/* <Route 
            path="/data" 
            component={Data} 
            day={this.state.day}
            type={this.state.type}
            foodName={this.state.foodName}
            protein={this.state.protein}
            carbs={this.state.carbs}
            fat={this.state.fat}
            form={this.state.form}
            calculateMacros={this.calculateMacros}
            /> */}
            <Switch>
              <Route exact path="/data" render={ props => (
                <Fragment>
                  <Data 
                    handleChange={this.handleChange}
                    calculateMacros={this.calculateMacros}
                    macros = {this.state.macros}
                  />
                </Fragment>
              )} />
            </Switch>
          <Switch>
          <Route path="/info" render={ props => (
            <Fragment>
              <Info macroData={this.state.macroData}/>
            </Fragment>
          )} />
          </Switch>
          {/* <Route path="/recipes" component={Recipes} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
