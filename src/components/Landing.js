import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';




class Landing extends Component {
    render(){
        return ( 
                <div className="jumbotron jumbotron-image my-5 text-dark img-fluid container">
                    <div className="jumbotron mt-3 text-center">
                        <h1 className="display-4">Count Your Calories!</h1>
                        <p className="lead">Keeping track of your dietary goals is never fun, but we make it easy for you.</p>
                        <hr className="my-4" />
                        <p>We help you control your diet, and meet your goals. </p>
                        <Link className="btn btn-danger btn-lg mr-1" to="/info" role="button">Get Started</Link>
                        <Link className="btn btn-dark btn-lg" to="/data">Your Data</Link>
                    </div>
                </div>

        )
    }
}


export default Landing;