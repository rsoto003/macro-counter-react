import React from 'react';

function Form(props){
        return (
            <form className="input-group mb-3 col-xl-4 mt-5 mx-auto" onSubmit={props.getRecipe}>
                <input className="form-control" placeholder="Find a recipe..." type="text" name="recipe" onChange={props.handleRecipeChange}/>
                <div className="input-group-append">
                    <button className="btn btn-primary btn-lg" type="submit">Search</button>
                </div>   
            </form>
        )
    }

export default Form;