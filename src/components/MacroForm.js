import React, { Component } from 'react';

class MacroForm extends Component {
    render(){
        return (
            <table className="table table-hover table-dark table-striped mt-5 col-xl-10 mx-auto text-light" id="userData">
                
                <thead>
                    <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Type</th>
                        <th scope="col">Food Name</th>
                        <th scope="col">Protein</th>
                        <th scope="col">Carbs</th>
                        <th scope="col">Fat</th>
                        <th scope="col">Total Calories</th>
                        <th scope="col"> </th>
                    </tr>   
                </thead>
                <tbody>
                
                </tbody>
            </table>      
        );
    }
}

export default MacroForm;