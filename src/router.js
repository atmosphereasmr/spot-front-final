import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Components/Home/home.js'
import Search from './Components/Search/search.js'

export default (
  <Switch>
    <Route component={Home} path="/" exact/>
    <Route component={Search} path="/search:access" exact/>
  </Switch>
)
