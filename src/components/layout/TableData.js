import React from 'react';

const TableData = props => {
    const { day, type, food, protein, carbs, fat, calories } = props.item;
    return (
        <tr>
            <th scope="row">{day}</th>
            <td>{type}</td>
            <td>{food}</td>
            <td>{protein}</td>
            <td>{carbs}</td>
            <td>{fat}</td>
            <td>{calories}</td>
        </tr>
    )
}

export default TableData;