import React from 'react';
import Listefilm from '../components/Listefilm';
import Logo from '../components/Logo';

const divstyle = {
    textAlign: "center"
}

const Films = () => {
    return (
        <div style={divstyle}>
            <Logo />
            <Listefilm />
        </div>
    );
};

export default Films;