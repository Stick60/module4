import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';


const jwtoken = localStorage.getItem('access');
const paramRequest = {
    headers: {
        Authorization: "Bearer " + jwtoken
    }
}
console.log(jwtoken);
const Listefilm = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {
        axios.get(
            'https://stud.yoso.fr/api/movies/', paramRequest
        ).then(resp => {
            setFilms(resp.data);
            console.log(films)
        })
    })


    return (
        <div>
            <ul className='movie-list'>
                {films.map(({ id, image, publishAt, duration, description, title }) => (
                    <MovieItem
                        id={id}
                        image={image}
                        title={title}
                        publishAt={publishAt}
                        duration={duration}
                        description={description}
                    />
                ))}
            </ul>
        </div>



    );
};

export default Listefilm;