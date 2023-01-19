import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const jwtoken = localStorage.getItem('access');
const paramRequest = {
    headers: {
        Authorization: "Bearer " + jwtoken
    }
};

const DetailFilm = () => {
    const { id } = useParams();
    const [films, setFilms] = useState([])
    useEffect(() => {
        let isMounted = false;
        if (!isMounted)
            axios.get(
                `https://stud.yoso.fr/api/movies/${id}`, paramRequest
            ).then(resp => {
                setFilms(resp.data);
            })
        return () => isMounted = true;
    }, [id])

    const locationFilm = (event) => {
        event.preventDefault();
        let login = localStorage.getItem('login');
        let infoLocation = {
            loanBy: login,
            movie: films.title
        }
        axios.post(
            'https://stud.yoso.fr/api/loans/', infoLocation
        ).then(resp => {
            alert("Vous venez de louer " + films.title);
        }).catch(error => { console.warning(error.status) })

    }

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
                    <button onClick={locationFilm} className="button-82-pushable"
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