import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppBar from 'material-ui/lib/app-bar';

import App from './components/app';
import reducers from './reducers';


//from the original tutorial
//const createStoreWithMiddleware = applyMiddleware()(createStore);
//this wasn't explained in the video, Provider didn't exist, it just worked so that seems dumb
/*
ReactDOM.render(
    <div>
     <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  </div>
  , document.querySelector('#app'));
  */     
  
  
  //from redux documentation directly
  //what the hell is apply middleware vs simply create store
  let store = createStore(reducers);
  ReactDOM.render(
    <div>
     <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
  <Provider store={store}>
    <App />
  </Provider>
  </div>
  , document.querySelector('#app'));
  