import React from 'react';
import Logo from '../components/Logo';
import Formconnection from '../components/Formconnection';

const divstyle = {
    textAlign: "center"
}

const Connection = () => {
    return (
        <div style={divstyle}>
            <Logo />
            <Formconnection />
        </div>
    );
};
export default Connection;