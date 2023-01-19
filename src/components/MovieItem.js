import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieItem({ id, image, title }) {
    const navigate = useNavigate();
    return (
        <li key={id} className='movie-item'>
            <img className='movie-item-cover' src={`https://stud.yoso.fr${image}`} alt={`${title} cover`} />
            <h2 className='titleliste'>{title}</h2>
            <div >
                <button type="button" onClick={() => navigate(`/film/${id}`)} className="button-82-pushable">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        Details
                    </span>
                </button>

            </div>
        </li >
    )
}

export default MovieItem
