import React from 'react';
import Accueil from '../components/Accueil';
import Logo from '../components/Logo';

const divstyle = {
    textAlign: "center"
}

const Home = () => {
    return (
        <div style={divstyle}>
            <Logo />
            <Accueil />
        </div>
    );
};

export default Home;