import React from 'react';
import { videos } from "./Videosforyoga";
import '../Component/CssFile/Videogallery.css';

const VideoGallery = () => {
    return (
        <div className="video-gallery">
            <h2 className='yogavideosheader'>Yoga Videos</h2>
            {videos.map((video) => (
                <div className="video-item" key={video.id}>
                    <h3>{video.title}</h3>
                    <video width="600" controls className='yogavideosheader'>
                        <source src={process.env.PUBLIC_URL + "/" + video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ))}
        </div>
    );
};

export default VideoGallery;
