import React from 'react';
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="Home">
            <Link to="/reactjs" >
                <h1> ReactJS</h1>
            </Link>
            <Link to="/nodejs" >
                <h1> NodeJS</h1>
            </Link>
        </div>
    );
}

export default Home;
