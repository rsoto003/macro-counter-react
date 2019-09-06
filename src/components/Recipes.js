import React, { Component } from 'react';


class Recipe extends Component{
    state = {
        recipes: []
    }
    getRecipeItem = async(e) => {
        e.preventDefault();
        e.persist();
        const api_key = '0b526b6bb7c7894d4d0a76610cfb9129';
        const recipeName = e.target.elements.recipe.value;
        const recipe_call = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=15`);
        const recipe_data = await recipe_call.json();

        this.setState({
            recipes: recipe_data.recipes
        });
        console.log(this.state.recipes);

        e.target.elements.recipe.value = 'Search for another recipe...';
    }
    render(){
        return (
            <div>
                
            </div>
        );
    }
}

export default Recipe;