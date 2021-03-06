import React from 'react';
import TableData from './TableData';

function MacroForm(props){
    let macroData = props.macros.map( item => <TableData item={item} key={item.id} delEvent={props.delEvent.bind(this, item.id)} editEvent={props.editEvent.bind(this, item.id)}/>)
    return (
        <div className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl mx-auto">
            <table className="table table-hover table-dark table-striped mt-5 col-xl-12 col-lg-10 col-md-12 col-sm-12 text-light" id="userData" > 
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
            
            <tbody className="">
                {macroData}
            </tbody>

        </table>      
        </div>

        
        );
}

export default MacroForm;