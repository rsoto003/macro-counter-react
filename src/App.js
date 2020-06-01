import React, { Component, Fragment  } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Data from './components/pages/Data';
import Info from './components/pages/Info';
import Landing from './components/pages/Landing';
import Recipes from './components/pages/Recipes';


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
        alert: false,
        alertData: null,
        isEditing: false,
    };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    })
  }

  calculateMacros = event => {
    event.preventDefault();
    let { day, type, food, protein, carbs, fat, id, macros } = this.state;
    let newCarb = carbs * 4;
    let newProtein = protein * 4;
    let newFat = fat * 9;
    let calculatedCalories = newCarb + newProtein + newFat;
    id = macros.length + 1;
    const macroData = {
      day,
      type, 
      food, 
      id,
      carbs: newCarb,
      fat: newFat,
      protein: newProtein,
      calories: calculatedCalories,
    }


    if( day === '' || type === '' || food === '' || protein === '' || carbs === '' || fat === ''){
      this.setAlert('Please Fill Out Form Completely', 'danger');
      setTimeout( () => { this.setState({ alert: false})}, 5000);
      return;
    } 
    if(protein < 0 || carbs < 0 || fat < 0){
      this.setAlert('Please enter value greater than zero.', 'danger');
      setTimeout( () => { this.setState({ alert: false})}, 5000);
      return;
    }

      this.setState({ 
        macros: [...this.state.macros, macroData],
        day: '',
        type: '',
        food: '',
        protein: '',
        carbs: '',
        fat: ''
      })
  }
  editChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }


  editItem = id => {
    console.log('item to be edited: ', id);
    this.setState({
      isEditing: true,
      editedId: id
    })
      for(let i = 0; i < this.state.macros.length; i++){
        if(this.state.macros[i].id === id){
          this.setState({
            day: this.state.macros[i].day,
            type: this.state.macros[i].type,
            food: this.state.macros[i].food,
            protein: this.state.macros[i].protein / 4,
            carbs: this.state.macros[i].carbs / 4,
            fat: this.state.macros[i].fat / 9, 
            id: id,
          })
        }
      }
  }

  editSubmit = event => {
    event.preventDefault();

    this.setState(prevState => {
      const protein = prevState.protein * 4;
      const carbs = prevState.carbs * 4;
      const fat = prevState.fat * 9;
      let calculatedCalories = carbs + protein + fat;
      const calculatedMacros = {
        carbs: carbs,
        protein: protein,
        fat: fat, 
        calories: calculatedCalories,
        day: prevState.day,
        food: prevState.food,
        type: prevState.type,
        id: prevState.id
      }

      const updatedMacros = prevState.macros.filter(macroItem => macroItem.id !== prevState.editedId);
      updatedMacros.push(calculatedMacros);
      updatedMacros.sort( ( low, high ) => {
        return low.id - high.id
      });
      return {
        macros: [...updatedMacros],
        isEditing: false,
        editedId: '',
        day: '',
        type: '',
        food: '',
        protein: '',
        carbs: '',
        fat: '',
        id: ''
      }
    });
  }


  deleteItem = id => {
    console.log('macro item to be deleted: ', id);
    this.setState(prevState => {
      const updatedMacros = prevState.macros.filter(item => item.id !== id);
      return {
        macros: updatedMacros,
        isEditing: false,
        editedId: '',
        day: '',
        type: '',
        food: '',
        protein: '',
        carbs: '',
        fat: '',
        id: ''
      }
    })
  }
  
  closeAlert = () => {
    this.setState({ alert: false })
  }

  setAlert = (msg, type) => {
    this.setState({ 
      alert: true,
      alertData: {
        msg, type
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
                    alert={this.state.alert}
                    closeAlert={this.closeAlert}
                    setAlert={this.setAlert}
                    alertData={this.state.alertData}
                    day={this.state.day}
                    type={this.state.type}
                    food={this.state.food}
                    protein={this.state.protein}
                    carbs={this.state.carbs}
                    fat={this.state.fat}
                    editEvent={this.editItem}
                    isEditing={this.state.isEditing}
                    editSubmit={this.editSubmit}
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

          <Route path="/recipes" component={Recipes} />
        </div>
      </Router>
    );
  }
}

export default App;
