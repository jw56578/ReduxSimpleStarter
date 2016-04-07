import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppBar from 'material-ui/lib/app-bar';

import App from './components/app';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

//just trying out material ui
ReactDOM.render(
  <div>
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    <App />
  </div>
  , document.querySelector('#app'));

/*
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    <App />
  </Provider>
  , document.querySelector('.container'));
  */