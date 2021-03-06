import React from 'react'
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    
    const videoItems = props.videos.map((video)=>{
        //use key on lists so rendering is faster
        return <VideoListItem 
        onVideoSelect ={props.onVideoSelect}
        key={video.etag} 
        video={video} />
    });
    return (
        
        <ul>
        {videoItems}
        </ul>
    )
    
}

export default VideoList;