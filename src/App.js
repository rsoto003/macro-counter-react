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
        id: '',
        calories: null
    };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    })
  }

  calculateMacros = event => {
    event.preventDefault();
    let { day, type, food, protein, carbs, fat, id } = this.state;
    let newCarb = carbs * 4;
    let newProtein = protein * 4;
    let newFat = fat * 9;
    let calculatedCalories = newCarb + newProtein + newFat;
    id = Math.floor(Math.random() * 10000);
    const macroData = {
      day,
      type, 
      food, 
      id,
      carbs: newCarb,
      fat: newFat,
      protein: newProtein,
      calories: calculatedCalories
    }
    this.setState({ 
      macros: [...this.state.macros, macroData]
    })
  }

  deleteItem = (id) => {
    console.log('macro item to be deleted: ', id);
    this.setState(prevState => {
      const updatedMacros = prevState.macros.filter(item => item.id !== id);
      return {
        macros: updatedMacros
      }
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route path="/" exact component={Landing}/>
            <Switch>
              <Route exact path="/data" render={ props => (
                <Fragment>
                  <Data 
                    handleChange={this.handleChange}
                    calculateMacros={this.calculateMacros}
                    macros={this.state.macros}
                    delEvent={this.deleteItem}
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
