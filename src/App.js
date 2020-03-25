import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Data from './components/Data';
import Info from './components/Info';
import Landing from './components/Landing';
import Recipes from './components/Recipes'


class App extends Component {
  state = {
    day : '',
    type: '',
    foodName: '',
    protein: null,
    carbs: null,
    fat: null,
    error: ''
  }
  calculateMacros = (e) => {
    // e.preventDefault();
    e.stopPropagation();
    e.persist();
    let day = e.target.elements.day.value;
    let type = e.target.elements.type.value;
    let foodName = e.target.elements.foodName.value;
    let protein = e.target.elements.protein.value; 
    let carbs = e.target.elements.carbs.value;
    let fat = e.target.elements.fat.value;
    if(day && type && foodName && protein && carbs && fat){
      this.setState({
        day: day,
        type: type,
        foodName: foodName,
        protein: protein,
        carbs: carbs,
        fat: fat
      });
    } else {
      this.setState({
        error: 'Please fill out the form completely.'
      })
      console.log(this.state.error)
    }
    console.log(this.state);
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Landing}/>
          <Route 
            path="/data" 
            component={Data} 
            day={this.state.day}
            type={this.state.type}
            foodName={this.state.foodName}
            protein={this.state.protein}
            carbs={this.state.carbs}
            fat={this.state.fat}
            calculateMacros={this.calculateMacros}
            />
          <Route path="/info" component={Info} />
          <Route path="/recipes" component={Recipes} />
        </div>
      </Router>
    );
  }
}

export default App;
