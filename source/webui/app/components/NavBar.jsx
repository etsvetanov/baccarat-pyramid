import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class NavBar extends Component {
    render() {
        return (
            <div className="app-nav-bar">
                <div className="navbar-nav-buttons">
                    <Link to="/options">Options</Link>
                    <Link to="/simulate">Simulate</Link>
                    <Link to="/admin">Admin</Link>
                </div>

                <div className="navbar-logout">
                    <a href="/logout">logout</a>
                </div>
            </div>
        )
    }
}

export default NavBar;