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
            <div className="mt-5">
                <Form getRecipe={this.getRecipe} handleRecipeChange={this.handleRecipeChange}/>
                <div className="container">
                <div className="row col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
                    {this.state.recipes.map( recipe => {
                    return <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6" key={recipe.id}>
                    <div className="card mb-3 text-dark">
                    <img className="card-img-top" src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt={recipe.title}/>
                        <div className="card-body">
                            <h5 className="card-title"> {recipe.title}</h5>
                            <a className="btn btn-info recipe-me-button" href={recipe.sourceUrl}>Recipe Me!</a>
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