import React, { Component } from 'react';
import axios from 'axios';
import Form from '../layout/Form';



class Recipe extends Component{
    state = {
        recipes: [],
        recipe: ''
    }

    getRecipe = async e => {
        e.preventDefault();
        let recipeKey = '';

        if(process.env.NODE_ENV !== 'production'){
            recipeKey = process.env.REACT_APP_API_KEY;
        } else {
            recipeKey = process.env.API_KEY
        }

        const searchRecipe = await axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${recipeKey}&query=${this.state.recipe}&number=12`);
        const recipe_data = searchRecipe.data.results;

        this.setState({ recipes: recipe_data})
    }

    handleRecipeChange = event =>  {
        const { name, value } = event.target;
        this.setState({ [name] : value })
    }
    render(){
        return (
            <div className="mt-5 mx-auto col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 recipe-container lead">
                <Form getRecipe={this.getRecipe} handleRecipeChange={this.handleRecipeChange}/>
                <div className="recipeContainer container col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 mx-auto card-container">
                    <div className="row col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 card-container">
                        {this.state.recipes.map( recipe => {
                        return <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-12 m-2" key={recipe.id}>
                        <div className="card mb-3 text-dark truncate">
                        <img className="card-img-top img-fluid img-thumbnail" src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt={recipe.title}/>
                            <div className="card-body pb-3">
                                <h5 className="card-title mb-4"> {recipe.title}</h5>
                                <a className="btn btn-success btn-block recipe-me-button" href={recipe.sourceUrl}>Recipe Me!</a>
                            </div>
                        </div>
                    </div> 
                    })}
          
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;