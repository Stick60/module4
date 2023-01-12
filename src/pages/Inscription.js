import React from 'react';
import Logo from '../components/Logo';
import Forminscription from '../components/Forminscription';

const divstyle = {
    textAlign: "center"
}

const Inscription = () => {
    return (
        <div style={divstyle}>
            <Logo />
            <Forminscription />
        </div>
    );
};

export default Inscription;

