import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Formconnection = () => {
    const navigate = useNavigate();
    const { register, formState: { errors } } = useForm();

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        let userData = {
            email: data.get('email'),
            password: data.get('password')
        }

        axios.post(
            'https://stud.yoso.fr/api/token/', userData
        ).then(resp => {
            console.log(resp);
            const jwtoken = resp.data;
            const idUser = resp.data.user.id;
            localStorage.setItem("iduser", idUser);
            localStorage.setItem("access", jwtoken.access);
            localStorage.setItem("login", userData.email);
            navigate("/films");
        }).catch(error => { console.log(error) })

    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="input-container">
                    <label>Email</label>
                    <br />
                    <input type="text"
                        margin="normal"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        {...register('email')}
                    />

                </div>
                <div className="input-container">
                    <label>Password</label>
                    <br />
                    <input
                        margin="normal"
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register('password')}
                    />

                </div>


                <br />
                <button
                    type="submit"
                    className="button-82-pushable"

                >
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        Se connecter
                    </span>
                </button>
            </form>
        </div >
    );
};

export default Formconnection;