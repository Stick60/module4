import React from 'react';

function MovieItemDetail({ id, image, title, publishAt, duration, description }) {
    return (
        <li key={id} className='movie-item'>
            <img className='movie-item-cover' src={`https://stud.yoso.fr${image}`} alt={`${title} cover`} />
            <h2 className='title'>{title}</h2>
            <div >
                <u>Année</u> : <span className='time'>{publishAt}</span>
                <br />
                <u>Durée</u> :<span className='time'> {duration}</span>
            </div><br />
            <div className="desc"> Description : {description} </div>
        </li >
    )
}

export default MovieItemDetail