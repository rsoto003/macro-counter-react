import React from 'react';
// import CountMacros from '../CountMacros';

function Info(props){
        return ( 
            <div className="container col-xl-8 col-lg-10 col-md-10 col-sm-12 col-xs-12 lead mx-auto">
                <div className=" container row mt-5 border-bottom border-warning">
                    <h1 className="display-4 mb-3">What are Macros?</h1>
                    <h2>{props.day}</h2>
                    <p className="mb-4">
                        Macronutrients (macros for short) are what makes up the calorie content of food. 
                        The three categories of macros are fats, carbohydrates, and protein. It is important to count your macros and not just your calories because where you are getting your calories from really does matter.
                        Each macro provides a certain number of calories per gram.
                    </p>
                </div>

                <div className=" container row my-5 border-bottom border-warning">
                    <h1 className="display-4 mb-3">Why are Counting Macros so Important?</h1>
                    <p className="lead mx-auto">
                        Getting the correct amount of protein, carbs and fat into your macro diet will help you reach your fitness goals, whether you want to lose weight or put on some muscle. Meal plans should have a balance of all the three key macronutrients: protein, carbs, and fats.
                    </p>
                    <p className="lead mx-auto">    
                        When your diet is too low in protein, you could lose muscle instead of fat, which can lead to a slower metabolism.
                        If you aren't getting enough carbs, you may be very low in energy. If you are low in fats, you might suffer from hormonal imbalances. If carbs or fats are too high, you may not see fat loss results.
                    </p>
                </div>

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
                    <ul className="list-group col-xl-6 mb-5 mx-auto">     
                        <li className="list-group-item list-group-item-primary">Carbs: 1 gram of carbs = 4 calories</li>
                    </ul>
                </div>

                <div className="lead row">
                      <p className="lead">
                      <span className="badge badge-success mr-2">Proteins: </span>
                        Protein is the most essential macronutrient for those trying to reach their fitness goals. Helps you build muscle and and helps prevent muscle loss.
                        It is also the most satiating macro, helping you fend off hunger for longer periods of time and feel fuller. <span className="font-italic">Key foods rich in protein are meat, whey and eggs.</span>
                      </p>
                      <ul className="list-group col-xl-6 mb-5 mx-auto">     
                        <li className="list-group-item list-group-item-success">Protein: 1 gram of protein = 4 calories</li>
                    </ul>
                </div>
                
                <div className="lead row">
                    <p>
                        <span className="badge badge-danger mr-2"> Fats:  </span> Fats help us keep our hormone levels in balance and they are essential nutrients 
                        that our bodies need to live. It is important to get your fats from healthy sources and stay away from trans-fats,
                        as these foods will not help your reach your fitness goals. <span className="font-italic">Good sources of fats are found in avocados,
                         nuts, coconut oil and avocado oil. </span>
                    </p>
                    <ul className="list-group col-xl-6 mb-5 mx-auto">     
                        <li className="list-group-item list-group-item-danger">Fat: 1 gram of fat = 9 calories</li>
                    </ul>
                </div>
                    
                </div>
                {/* <CountMacros /> */}
            </div>            
        )
}

export default Info;