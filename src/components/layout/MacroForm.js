import React from 'react';
import TableData from './TableData';

function MacroForm(props){
    let macroData = props.macros.map( item => <TableData item={item}/>)
    return (
        <table className="table table-hover table-dark table-striped mt-5 col-xl-10 col-lg-10 col-md-12 col-sm-12 mx-auto text-light" id="userData" > 
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
                {macroData}
            </tbody>
        </table>      
        );
}

export default MacroForm;