import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';


const jwtoken = localStorage.getItem('access');
const paramRequest = {
    headers: {
        Authorization: "Bearer " + jwtoken
    }
}
const Listefilm = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {
        let isMounted = false;
        if (!isMounted)
            axios.get(
                'https://stud.yoso.fr/api/movies/', paramRequest
            ).then(resp => {
                setFilms(resp.data);
            })
        return () => isMounted = true;
    }, [])


    return (
        <div>
            <ul className='movie-list'>
                {films.map(({ id, image, title }) => (
                    <MovieItem
                        key={id}
                        id={id}
                        image={image}
                        title={title}
                    />
                ))}
            </ul>
        </div>



    );
};

export default Listefilm;