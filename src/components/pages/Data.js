import React from 'react';
import MacroForm from '../layout/MacroForm';
import Alert from '../layout/Alert'

function Data(props) {
        const { day, type, food, protein, carbs, fat } = props.macros;
        const showAlert = props.alert ? <Alert closeAlert={props.closeAlert} /> : null;
        return (
           <div>
           
                <form onSubmit={props.calculateMacros} className="row col-xl-12 col-lg-12 col-md-8 col-sm-10 mx-auto border border-dark border-bottom-0 border-right-0 border-left-0 pt-5">
                    <h1 className="display-4 text-center col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 border-bottom border-warning mb-5 pb-3">What Did You Eat Today?</h1>
                    {showAlert}
                    <div className="form-group col-xl-4 col-lg-4 col-md-6">
                        <label>Day</label>
                        <select 
                            className="custom-select" 
                            name="day"
                            value={day}
                            onChange={props.handleChange}
                        >
                            <option defaultValue>Choose...</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </div>
                    <div className="form-group col-xl-4 col-lg-4 col-md-6">
                        <label>Type</label>
                        <select 
                            className="custom-select" 
                            name="type" 
                            value={type} 
                            onChange={props.handleChange}
                        >
                            <option defaultValue>Choose...</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Dessert">Dessert</option>
                            <option value="Snack">Snack</option>
                        </select>
                    </div>
                    <div className="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <label>Food Name</label>
                        <input 
                            className="form-control form1" 
                            placeholder="Enter Food Name Here"  
                            name="food" 
                            value={food} 
                            onChange={props.handleChange}
                        />
                    </div>
                    <div className="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <label>Protein</label>
                        <input  
                            type="text"  
                            className="form-control form2"   
                            placeholder="Enter Protein Intake"    
                            name="protein"     
                            value={protein}     
                            onChange={props.handleChange}/>                              
                    </div>
                    <div className="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <label>Carbs</label>
                        <input  
                            type="text"  
                            className="form-control form3"   
                            placeholder="Enter Carb Intake"   
                            name="carbs"  
                            value={carbs}    
                            onChange={props.handleChange}/>
                    </div>
                    <div className="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <label>Fat</label>
                        <input  
                            type="text"  
                            className="form-control form4"   
                            placeholder="Enter Fat Intake"    
                            name="fat"     
                            value={fat} onChange={props.handleChange}/>
                    </div>
                        <button type="submit" className="btn btn-primary btn-lg mx-auto mt-2 submitButton">Submit</button>
                        {/* <button type="button" className="btn btn-danger btn-lg mx-auto" onClick={props.delEvent}>Delete</button> */}
                </form>


                { props.macros.length !== 0 &&
                    <div>
                        <h1 className="mt-5 display-3 text-center">Your Data</h1>
                        <div className="row col-xl-12 col-lg-12 col-md-12 col-sm-12 mx-auto"> 
                        <MacroForm macros={props.macros} delEvent={props.delEvent}/>
                        </div>
                    </div>
                }
           </div>

        )
}

export default Data;