import React from 'react';
import DetailFilm from '../components/DetailFilm';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

const divstyle = {
    textAlign: "center"
}

const Film = () => {
    return (
        <div style={divstyle}>
            <Logo />
            <Menu />
            <DetailFilm />
        </div>
    );
};

export default Film;