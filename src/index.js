import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/less/bootstrap.less';
import './style/styles.css';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import Popup from 'react-popup';


import MainPage from './components/main/MainPage';

/* eslint-disable no-console */

const store = configureStore();

store.subscribe(() => {
  console.log("Store Changed!");
  console.log(store.getState());
  }
);

render(
  <Provider store = {store}>
      <MainPage />
  </Provider>,
  document.getElementById('app')
);
