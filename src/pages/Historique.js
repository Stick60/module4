import React from 'react';
import ListeHistorique from '../components/ListeHistorique';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

const divstyle = {
    textAlign: "center"
}

const Historique = () => {
    return (
        <div style={divstyle}>
            <Logo />
            <Menu />
            <ListeHistorique />
        </div>
    );
};

export default Historique;