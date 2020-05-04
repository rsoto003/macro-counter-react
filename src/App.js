import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Data from './components/Data';
import Info from './components/Info';
import Landing from './components/Landing';
import Recipes from './components/Recipes'


class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   day : '',
    //   type: '',
    //   foodName: '',
    //   protein: null,
    //   carbs: null,
    //   fat: null,
    //   error: ''
    // };
    this.state={
      day: 'Friday',
      type: 'Breakfast',
      foodName: 'Breakfast Burrito',
      protein: 75,
      carbs: 56,
      fat: 2000,
      form: true
    };
    this.calculateMacros = this.calculateMacros.bind(this);
  }

  calculateMacros(event){
    event.preventDefault();
    console.log('prevent default is working finally');
    let day = event.target.elements.day.value;
    let type = event.target.elements.type.value;
    let foodName = event.target.elements.foodName.value;
    let protein = event.target.elements.protein.value; 
    let carbs = event.target.elements.carbs.value;
    let fat = event.target.elements.fat.value;
    if(day && type && foodName && protein && carbs && fat){
      this.setState({
        day: day,
        type: type,
        foodName: foodName,
        protein: protein,
        carbs: carbs,
        fat: fat
      });
      console.log(this.state.day)
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
          <Navbar/>
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
            form={this.state.form}
            calculateMacros={this.calculateMacros}
            />
            {/* <Data 
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
          <Route path="/info" component={Info} />
          {/* <Route path="/recipes" component={Recipes} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
