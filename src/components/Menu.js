import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu">
            <div className="menuitem"><NavLink to="/films" >Liste des Films </NavLink></div>
            <div className="menuitem"><NavLink to="/historique "> Historique</NavLink></div>
        </div>
    );
};

export default Menu;