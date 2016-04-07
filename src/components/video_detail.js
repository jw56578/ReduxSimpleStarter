import React from 'react'

const VideoDetail = ({video}) =>{
    //this is the pain in the ass part of react. it always has to render even if there is no data
    //so you have to make sure data is there
    if(!video){
        return <div>Loading</div>;
    }
    const videoId = video.id.videoId;
    //string interpolation
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return(
        <iframe src={url} />
        
    );
    
};

export default VideoDetail;