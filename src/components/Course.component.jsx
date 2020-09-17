import React, { useState } from 'react';

function Course(props) {
    const courseName = props.match.params.coursename;

    const courses = {
        reactjs: [
            { title: "react js title 1", vid: "o8jEBYOu9dA" },
            { title: "react js title 2", vid: "FOSqMousEYs" },
            { title: "react js title 3", vid: "LJoGgn3K76I" },
        ],
        nodejs: [
            { title: "node js title 1", vid: "o8jEBYOu9dA" },
            { title: "node js title 2", vid: "FOSqMousEYs" },
            { title: "node js title 3", vid: "LJoGgn3K76I" },
        ],

    }

    const [title, setTiTle] = useState(courses[courseName][0].title);
    const [vid, setVid] = useState(courses[courseName][0].vid);

    const renderVideo = () => {
        return (
            <div className="video-container">
                <iframe width="853" height="480" src={"//www.youtube.com/embed/" + vid + "?rel=0"} frameborder="0" allowfullscreen></iframe>
            </div>
        )
    }
    return (
        <div >
            <h1> {courseName} </h1>
            {renderVideo()}
            <div className="collection">
                {
                    courses[courseName].map((item) => {
                        return <a href="#" className="collection-item" onClick={() => {
                            setTiTle(item.title);
                            setVid(item.vid);
                        }}>{item.title}</a>
                    })
                }
            </div>
        </div>
    );
}

export default Course;
