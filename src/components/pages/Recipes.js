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
        const API_KEY = '83f89a24bad24efc937b54a0af5fb5fa';
        const searchRecipe = await axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${this.state.recipe}`);
        const recipe_data = searchRecipe.data.results;

        console.log(recipe_data);

        this.setState({ recipes: recipe_data})
    }

    handleRecipeChange = event =>  {
        const { name, value } = event.target;
        this.setState({ [name] : value })
    }
    render(){
        return (
            <div>
                <Form getRecipe={this.getRecipe} handleRecipeChange={this.handleRecipeChange} />
                <div className="container">
                <div className="row col-xl-12 mt-3">
                    {this.state.recipes.map( recipe => {
                    return <div className="col-md-6 col-lg-4 col-xl-4 col-sm-6 col-xs-6" key={recipe.id}>
                    <div className="card mb-3 text-dark">
                    <img className="card-img-top" src={`https://spoonacular.com/cdn/ingredients_100x100/${recipe.image}`} alt={recipe.title}/>
                        <div className="card-body">
                            <h5 className="card-title"> {recipe.title}</h5>
                            <a className="btn btn-info" href={recipe.sourceUrl}>Recipe Me!</a>
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