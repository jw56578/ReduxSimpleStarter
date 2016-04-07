import React from 'react'

//es6 syntax to create a new variable called video and assign it the property from the actual argument called video
// equal to const video = props.video
const VideoListItem = ({video,onVideoSelect})=>{
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li onClick={()=> onVideoSelect(video)}>
            <img src ={imageUrl} />
        </li>
        );
};

export default VideoListItem;