import React from 'react';

function MacroIntro(props) {
        return (
            <div className=" container row mt-5 border-bottom border-warning">
                <h1 className="display-4 mb-3">What are Macros?</h1>
                <h2>{props.day}</h2>
                <p className="mb-4">
                    Macronutrients (macros for short) are what makes up the calorie content of food. 
                    The three categories of macros are fats, carbohydrates, and protein. It is important to count your macros and not just your calories because where you are getting your calories from really does matter.
                    Each macro provides a certain number of calories per gram.
                </p>
            </div>
        );
}

export default MacroIntro;
 