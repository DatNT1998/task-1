import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './components/Home.component';
import Course from './components/Course.component';

import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/:coursename" component={Course} />
            </BrowserRouter>
        </div>
    );
}

export default App;
