import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

function MovieItem({ id, image, title }) {
    const navigate = useNavigate();
    const { register, formState: { errors } } = useForm();

    const handleSubmit = (event) => {

        event.preventDefault();
        let data = new FormData(event.currentTarget);
        let id = data.get('id')
        localStorage.setItem("id", id);
        navigate("/film");
    }
    return (
        <li key={id} className='movie-item'>
            <img className='movie-item-cover' src={`https://stud.yoso.fr${image}`} alt={`${title} cover`} />
            <h2 className='titleliste'>{title}</h2>
            <div >
                <form onSubmit={handleSubmit} >
                    <input type="hidden" value={id} {...register('id')} />
                    <button type="submit" className="button-82-pushable"
                    >
                        <span className="button-82-shadow"></span>
                        <span className="button-82-edge"></span>
                        <span className="button-82-front text">
                            Details
                        </span>
                    </button>
                </form>
            </div>
        </li >
    )
}

export default MovieItem
