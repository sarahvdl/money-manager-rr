import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainPage from './components/main/MainPage';
import CategoryPage from './components/category/CategoryPage';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/category/:id" component={CategoryPage}/>
  </Route>
);
