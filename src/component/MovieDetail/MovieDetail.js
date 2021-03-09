import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MovieDetail = () => {
    const { id } = useParams()
    const api_key = '9c5ba9e49c7cab400ef7ed095b33077f'
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])

    const { title, overview, poster_path, popularity, release_date, vote_average } = movie;
    return (
        <div className="d-flex row justify-content-center align-items-center mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                    <div className="card-img-top">
                        <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} className="player-img img-thumbnail " alt="country flag" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title"><b>Name: </b> {title}</h4>
                        <p className="card-text"><b>Overview:</b> {overview}</p>
                        <p className="card-text"><b>Popularity:</b> {popularity}</p>
                        <p className="card-text"><b>Release Date:</b> {release_date}</p>
                        <p className="card-text"><b>Vote Average:</b> {vote_average}</p>
                        <Link to="/home">
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;