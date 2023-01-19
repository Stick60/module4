import React from 'react';
import Listefilm from '../components/Listefilm';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

const divstyle = {
    textAlign: "center"
}

const Films = () => {
    return (
        <div style={divstyle}>
            <Logo />
            <Menu />
            <Listefilm />
        </div>
    );
};

export default Films;