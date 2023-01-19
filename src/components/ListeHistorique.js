import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HistoItem from './HistoItem';

const jwtoken = localStorage.getItem('access');
const paramRequest = {
    headers: {
        Authorization: "Bearer " + jwtoken
    }
};

const ListeHistorique = () => {
    const idUser = localStorage.getItem('iduser');
    const [films, setFilms] = useState([])
    useEffect(() => {
        let isMounted = false;
        if (!isMounted)
            axios.get(
                `https://stud.yoso.fr/api/users/${idUser}/loans`, paramRequest
            ).then(resp => {
                setFilms(resp.data);
            })
        return () => isMounted = true;
    }, [])

    return (
        <div>
            <h3>Votre historique de location :</h3>
            <ul>
                {films.map(({ id, movie, loanAt }) => (
                    <HistoItem
                        key={id}
                        movie={movie}
                        loanAt={loanAt}
                    />
                ))}
            </ul>
        </div>
    )
};
export default ListeHistorique;