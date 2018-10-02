import React from 'react';
import { NavLink } from 'react-router-dom';

const menuLinks = [
    {'name': 'Dashboard', 'url':'/', 'exact':true},
    {'name': 'Add A Game', 'url':'/add-game', 'exact':false},
    {'name': 'Game Results', 'url':'/games', 'exact':false}    
]

export const Menu = () => 
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                {
                    menuLinks.map((link, i) => 
                        <li className="nav-item" key={i}>
                            <NavLink to ={link.url} activeClassName="active" className="nav-link" exact={link.exact}>
                                {link.name}
                            </NavLink>
                        </li>
                )
                }
            </ul>
        </div>
    </nav>