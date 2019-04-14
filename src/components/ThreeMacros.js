import React, { Component } from 'react';

class ThreeMacros extends Component {
    render(){
        return (
            <div className=" container row mt-5 border-bottom border-warning">
            <h1 className="display-4 mb-3">The Three Macros</h1>

                <p className="lead"><kbd>Carbs: </kbd>
                    Your main source of energy is from carbohydrates. Energy is essential to physical activity and our mental health, which shows why carbs are so important.  
                    <span className="font-weight-bold">There are two types of carbs:</span> <span className="font-italic">Simple </span>
                    and <span className="font-italic">Complex</span>. Simple carbs such as table sugar, brown sugar, candy, soda, honey and fruit are easily digested, so 
                    they will provide us with quick energy. Complex carbs are more nutritious than simple carbs, are higher in fiber,                              
                    and take longer to digest to keep you fuller longer. This provides more sustained energy in comparison to the quick energy of simple carbs. You can find 
                    complex carbohydrates in whole grains and vegetables. 
                </p>
            </div>
        );
    }
}

export default ThreeMacros;