import React from 'react';

const TableData = ({item: { day, type, food, protein, carbs, fat, calories}} ) => {
    return (
        <tr>
            <th scope="row">{day}</th>
            <td>{type}</td>
            <td>{food}</td>
            <td>{protein}</td>
            <td>{carbs}</td>
            <td>{fat}</td>
            <td>{calories}</td>
            <td><button className="btn btn-sm btn-danger">Delete</button></td>
        </tr>
    )
}

export default TableData;