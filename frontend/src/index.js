import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './component/Home';
import Search from './component/Search';
import List from './component/List';
import Lists from "./component/Lists";
import Post from "./component/Post";

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="search" component={Search}>
              <Route path=":id" component={Post}/>
          </Route>
          <Route path="list" component={List}>
              <Route path=":id" component={Lists}/>
          </Route>
      </Route>
  </Router>,
  document.getElementById('root')
);
