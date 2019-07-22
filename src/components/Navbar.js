import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                    <Link to="/" className="navbar-brand">Macro Counter</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/info">Macro Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/data">Your Data</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipes">Recipes</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default Navbar;