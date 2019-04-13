import React, { Component } from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import Data from './Data';
import Info from './Info';
import Landing from './Landing';

class Navbar extends Component {
    render(){
        return (
            <Router>
                <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                    <Link to="/" className="navbar-brand">Macro Counter</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/info">Macro Education</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/data">Your Data</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link disabled" to="/services">Services</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
                <Route path="/" exact component={Landing}/>
                <Route path="/data" component={Data} />
                <Route path="/info" component={Info} />
            </Router>
        )
    }
}

export default Navbar;