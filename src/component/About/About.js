import React from 'react';

import tmdb from '../images/tmdb.png'
const About = () => {
    return (
        <div className="container card mt-3 p-4 border-0">
            <img src={tmdb} className="card-img-top " alt="..." />
            <div className="card-body">
                <h5 className="card-title">Let's talk about TMDb</h5>
                <p className="card-text">The Movie Database (TMDb) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.</p>
            </div>
        </div>
    );
};

export default About;