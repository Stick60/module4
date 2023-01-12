import React from 'react';
import DetailFilm from '../components/DetailFilm';
import Logo from '../components/Logo';

const divstyle = {
    textAlign: "center"
}

const Film = () => {
    return (
        <div style={divstyle}>
            <Logo />
            <DetailFilm />
        </div>
    );
};

export default Film;