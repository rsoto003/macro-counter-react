import React, { Component } from 'react';
import MacroForm from './MacroForm';


class Data extends Component {
    render(){
        return (
           <div>
                <div className="row col-xl-8 col-lg-6 col-md-6 col-sm-6 mx-auto border border-dark border-bottom-0 border-right-0 border-left-0 pt-5">
                    <h1 className="display-4 text-center col-xl-12">What Did You Eat Today?</h1>
                    <div className="form-group col-xl-4">
                        <label for="exampleInputPassword1">Day</label>
                        <select className="custom-select" id="daySelect">
                            <option selected>Choose...</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </div>
                    <div className="form-group col-xl-4">
                        <label for="exampleInputPassword1">Type</label>
                        <select className="custom-select" id="foodType">
                            <option selected>Choose...</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Snack">Snack</option>
                        </select>
                    </div>
                    <div className="form-group col-xl-4">
                        <label for="exampleInputEmail1">Food Name</label>
                        <input type="text" className="form-control form1" id="foodName" aria-describedby="emailHelp" placeholder="Enter Food Name Here" />
                    </div>
                    <div className="form-group col-xl-4">
                        <label for="exampleInputEmail1">Protein</label>
                        <input type="text" className="form-control form2" id="proteinCount" aria-describedby="emailHelp" placeholder="Enter Protein Intake" />                              
                    </div>
                    <div className="form-group col-xl-4">
                        <label for="exampleInputPassword1">Carbs</label>
                        <input type="text" className="form-control form3" id="carbCount" placeholder="Enter Carb Intake"/>
                    </div>
                    <div className="form-group col-xl-4">
                        <label for="exampleInputPassword1">Fat</label>
                        <input type="text" className="form-control form4" id="fatCount" placeholder="Enter Fat Intake"/>
                    </div>
                        <button type="submit" className="btn btn-primary btn-lg mx-auto mt-2 submitButton">Submit</button>
                    
                </div>
                <h1 className="mt-5 display-3 text-center">Your Data</h1>
                <div className="row col-xl-12 col-lg-8 col-md-8 col-sm-6"> 
                    <MacroForm />
                </div>
           </div>

        )
    }
}

export default Data;