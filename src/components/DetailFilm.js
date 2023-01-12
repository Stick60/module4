import React, { useEffect, useState } from 'react';
import axios from 'axios';


const jwtoken = localStorage.getItem('access');
const idFilm = localStorage.getItem('id');
const paramRequest = {
    headers: {
        Authorization: "Bearer " + jwtoken
    }
}

const DetailFilm = () => {
    const [films, setFilms] = useState([])
    useEffect(() => {
        axios.get(
            'https://stud.yoso.fr/api/movies/' + idFilm, paramRequest
        ).then(resp => {
            setFilms(resp.data);
            console.log(films)
        })
    })

    return (
        <div className='conteneur'>
            <img className='movie-item-cover' src={`https://stud.yoso.fr` + films.image} alt={`cover`} />
            <div className='title'>{films.title}</div>
            <div className='info'>
                <u>Publié le</u> : <span className='time'> {films.publishAt} </span>
                <br />
                <u>Durée</u> :<span className='time'> {films.duration} </span>
            </div><br />
            <div className='description'> Résumé : {films.description} </div>
            <div >
                <form  >
                    <input type="hidden" />
                    <button type="submit" className="button-82-pushable"
                    >
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                            Louer
                        </span>
                    </button>
                </form>
            </div>
        </div>

    )



};


export default DetailFilm;