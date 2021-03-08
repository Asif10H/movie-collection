import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const api_key = '9c5ba9e49c7cab400ef7ed095b33077f'
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}`)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)
                }
            </div>
        </div>
    );
};

export default Movies;