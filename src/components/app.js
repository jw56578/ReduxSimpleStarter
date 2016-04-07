import React from 'react';
import _ from "lodash";
import { Component } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail'

import YTSearch from 'youtube-api-search'
const API_KEY  = 'AIzaSyC4dPeIGgFWD9grpr9Q1qalF1Nk8fRnkio';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            selectedVideo:null
        };
        this.videoSearch("stuff");
    }
  videoSearch(term){
           //make sure to use arrow function else "this" won't be the correct thing
        YTSearch({key:API_KEY,term:term},(videos)=>{
            //es6 short cut for {videos:videos}
            this.setState({
                videos,
                selectedVideo:videos[0]
            });
            
        });
  }
  render() {
      const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    return (
      <div>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList 
        videos={this.state.videos} 
        onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
      />
      </div>
    );
  }
}
