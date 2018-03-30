import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <Link to="/" className="navbar-brand">Home</Link>
            <div className="navbar" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search movies</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}