import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    const { title, poster_path, id } = props.movie;

    return (
        <div className="col-md-3 col-sm-12 m-3 p-3" style={{ width: '18rem' }}>
            <div className="card h-100" >
                <img src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5> {title}</h5>
                   <Link className="btn btn-primary" to={`/movie/${id}`}>  More Detail </Link>
                     
                </div>
            </div>
        </div>
    );
};

export default Movie;