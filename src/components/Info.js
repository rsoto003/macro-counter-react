import React, { Component } from 'react';


class Info extends Component {
    render(){
        return ( 
            <div className="container col-xl-8 lead">
                <div className=" container row mt-5 border-bottom border-warning">
                    <h1 className="display-4  border-bottom border-primary mb-3">What are Macros?</h1>
                    <p className="">
                        Macronutrients (macros for short) are what makes up the calorie content of food. 
                        The three categories of macros are fats, carbohydrates, and protein. It is important to count your macros and not just your calories because where you are getting your calories from really does matter.
                        Each macro provides a certain number of calories per gram.
                    </p>
                </div>
            </div>            
        )
    }
}

export default Info;