import React, { Component } from 'react';


class CountMacros extends Component {


    render(){

        return (
                <div className="row lead my-5">
                    <h1 className="display-4 col-xl-10">Counting your Macros</h1>

                    <ul class="list-group col-xl-10 my-5 mx-auto">                       
                        <li class="list-group-item list-group-item-primary">Carbs: 1 gram of carbs = 4 calories</li>
                        <li class="list-group-item list-group-item-success">Protein: 1 gram of protein = 4 calories</li>
                        <li class="list-group-item list-group-item-danger">Fat: 1 gram of fat = 9 calories</li>
                    </ul>
                    <p className="lead">
                    For example, a food item that had 15g carbs, 1g fat, and 20g protein would have approximately 149 calories:
                        <ul class="mx-auto text-left list-styling" >
                            <li>15g carbs X 4 cal = 60cal</li>
                            <li>1g fat X 9 cal = 9 cal</li>
                            <li>20g protein X 4 cal = 80 cal</li>          
                        </ul>
                    </p>

                </div>
        );
    }
}

export default CountMacros;