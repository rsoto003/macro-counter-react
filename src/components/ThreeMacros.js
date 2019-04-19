import React, { Component } from 'react';


class ThreeMacros extends Component {
    render(){
        return (
            <div className=" container row mt-5 border-bottom border-warning p-4">
                <div className="row my-3">
                    <h1 className="display-4 mb-3">The Three Macros</h1>
                    <p className="lead">
                    <span className="badge badge-primary mr-2">Carbs: </span>
                        Your main source of energy is from carbohydrates. Energy is essential to physical activity and our mental health, which shows why carbs are so important.  
                        <span className="font-weight-bold">There are two types of carbs:</span> <span className="font-italic">Simple </span>
                        and <span className="font-italic">Complex</span>. Simple carbs such as table sugar, brown sugar, candy, soda, honey and fruit are easily digested, so 
                        they will provide us with quick energy. Complex carbs are more nutritious than simple carbs, are higher in fiber,                              
                        and take longer to digest to keep you fuller longer. This provides more sustained energy in comparison to the quick energy of simple carbs. You can find 
                        complex carbohydrates in whole grains and vegetables. 
                    </p>
                    <ul class="list-group col-xl-6 mb-5 mx-auto">     
                        <li class="list-group-item list-group-item-primary">Carbs: 1 gram of carbs = 4 calories</li>
                    </ul>
                </div>

                <div className="lead row">
                      <p className="lead">
                      <span className="badge badge-success mr-2">Proteins: </span>
                        Protein is the most essential macronutrient for those trying to reach their fitness goals. Helps you build muscle and and helps prevent muscle loss.
                        It is also the most satiating macro, helping you fend off hunger for longer periods of time and feel fuller. <span class="font-italic">Key foods rich in protein are meat, whey and eggs.</span>
                      </p>
                      <ul class="list-group col-xl-6 mb-5 mx-auto">     
                        <li class="list-group-item list-group-item-success">Protein: 1 gram of protein = 4 calories</li>
                    </ul>
                </div>
                
                <div className="lead row">
                    <p>
                        <span className="badge badge-danger mr-2"> Fats:  </span> Fats help us keep our hormone levels in balance and they are essential nutrients 
                        that our bodies need to live. It is important to get your fats from healthy sources and stay away from trans-fats,
                        as these foods will not help your reach your fitness goals. <span className="font-italic">Good sources of fats are found in avocados,
                         nuts, coconut oil and avocado oil. </span>
                    </p>
                    <ul class="list-group col-xl-6 mb-5 mx-auto">     
                        <li class="list-group-item list-group-item-danger">Fat: 1 gram of fat = 9 calories</li>
                    </ul>
                </div>

            </div>

            
        );
    }
}

export default ThreeMacros;