import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


//https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLkY6Xj8Sg8-vV5kALCOT0LShKc6mVFBvW&key=[YOUR_API_KEY] 

function Course(props) {
    const courseName = props.match.params.coursename;

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        let playListId = ""
        if (courseName === 'reactjs') {
            playListId = 'PLkY6Xj8Sg8-vV5kALCOT0LShKc6mVFBvW'
        } else {
            playListId = 'PLkY6Xj8Sg8-s-m-qFBQFoeNSfpCTBiwMU'
        }

        fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${playListId}&key=AIzaSyBO28gdEoriekku32-3fqnAiX4bLWefzp0`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const result = data.items.map(item => {
                    return { title: item.snippet.title, vid: item.contentDetails.videoId }
                })
                console.log(result, 'day ne')
                setCourses(result)
                setTiTle(result[0].title);
                setVid(result[0].vid);
            })
    }, [])

    const [title, setTiTle] = useState("");
    const [vid, setVid] = useState("");
    const [counter, setCounter] = useState(0);

    const renderVideo = () => {
        return (
            <div className="video-container">
                <iframe width="853" height="480" src={"//www.youtube.com/embed/" + vid + "?rel=0"} frameborder="0" allowfullscreen></iframe>
            </div>
        )
    }


    return (
        <div className="container" >
            <div className="row">
                <div className="col-12">
                    {renderVideo()}
                    <h3> {title}</h3>
                </div>
            </div>
            <ul className="collection">
                <div className="row">
                    {
                        courses.map((item, index) => {
                            return (
                                <div className="col-6">

                                    <div className="video-container" style={{ marginTop: '30px ' }}>
                                        <iframe width="853" height="480" src={"//www.youtube.com/embed/" + item.vid + "?rel=0"} frameborder="0" ></iframe>
                                    </div>
                                    <li key={index} href="#" style={{ fontWeight: 'bold' }} className={counter === index ? "collection-item active" : "collection-item"} style={{ cursor: 'pointer' }} onClick={() => {
                                        setTiTle(item.title);
                                        setVid(item.vid);
                                        setCounter(index)
                                    }}>{item.title}</li>
                                </div>
                            )
                        })
                    }
                </div>
            </ul>
        </div>
    );
}

export default Course;


{/* <h1> {courseName} </h1> */ }
{/* <div className="row">
                <div className="col-12">
                    {renderVideo()}
                    <h3> {title}</h3>
                </div>
            </div> */}
{/* <div className="row">
                <div className="col-6">
                    {renderVideo()}
                    <h3> {title}</h3>
                </div>
                <div className="col-6">
                    {renderVideo()}
                    <h3> {title}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    {renderVideo()}
                    <h3> {title}</h3>
                </div>
                <div className="col-6">
                    {renderVideo()}
                    <h3> {title}</h3>
                </div>
            </div> */}