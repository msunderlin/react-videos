import React from 'react';
import './VideoItem.css'

const VideoItem = ({video})=>{
    
    return (
        <div className="item">
            <img className="ui image"  src={video.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div classname="header">
                {video.snippet.title}
                </div>
            </div>
        </div>
    );
};


export default VideoItem;