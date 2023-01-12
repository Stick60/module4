import React from 'react';
import { NavLink } from 'react-router-dom';



const Accueil = () => {
    return (
        <div>
            <NavLink to="/inscription" >
                <button className="button-82-pushable">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        Inscription
                    </span>
                </button>
            </NavLink>
            <NavLink to="/connection" >
                <button className="button-82-pushable">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        Connexion
                    </span>
                </button>
            </NavLink>
        </div >
    );
};


export default Accueil;