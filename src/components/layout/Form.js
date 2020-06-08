import React from 'react';

function Form(props){
        return (
            <form className="input-group mb-3 col-xl-6 col-lg-8 mt-5 mx-auto" onSubmit={props.getRecipe} autoComplete="off">
                <input className="form-control" placeholder="Find a recipe..." type="text" name="recipe" onChange={props.handleRecipeChange}/>
                <div className="">
                    <button className="btn btn-primary btn-lg search-btn" type="submit">Search</button>
                </div>   
            </form>
        )
    }

export default Form;