import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {

 render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <Link to="/" className="navbar-brand">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search movies</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
 }
}