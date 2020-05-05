import React, { Component, Fragment  } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Data from './components/pages/Data';
import Info from './components/pages/Info';
import Landing from './components/pages/Landing';
import MacroForm from './components/layout/MacroForm';
// import Recipes from './components/Recipes'


class App extends Component {
    // this.state = {
    //   day : '',
    //   type: '',
    //   foodName: '',
    //   protein: null,
    //   carbs: null,
    //   fat: null,
    //   error: ''
    // };
    state = {
      macroData: {
        day: 'Friday',
        type: 'Breakfast',
        foodName: 'Breakfast Burrito',
        protein: 75,
        carbs: 56,
        fat: 2000,
        form: true
      }
    };


  calculateMacros = event => {
    event.preventDefault();
    // console.log('prevent default is working finally');
    // let day = event.target.elements.day.value;
    // let type = event.target.elements.type.value;
    // let foodName = event.target.elements.foodName.value;
    // let protein = event.target.elements.protein.value; 
    // let carbs = event.target.elements.carbs.value;
    // let fat = event.target.elements.fat.value;
    // if(day && type && foodName && protein && carbs && fat){
    //   this.setState({
    //     day: day,
    //     type: type,
    //     foodName: foodName,
    //     protein: protein,
    //     carbs: carbs,
    //     fat: fat
    //   });
    //   console.log(this.state.day)
    // } else {
    //   this.setState({
    //     error: 'Please fill out the form completely.'
    //   })
    //   console.log(this.state.error)
    // }
    // console.log(this.state);
    console.log("event submitted")
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
                    // day={this.state.day}
                    // type={this.state.type}
                    // foodName={this.state.foodName}
                    // protein={this.state.protein}
                    // carbs={this.state.carbs}
                    // fat={this.state.fat}
                    // form={this.state.form}
                    // calculateMacros={this.calculateMacros}
                    calculateMacros={this.calculateMacros}
                  />
                  <MacroForm data={this.state.macroData}  />
                </Fragment>
              )} />
            </Switch>
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
