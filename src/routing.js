import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './components/AppContainer';
import PlayerListContainer from './components/containers/Players/PlayerListContainer';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={PlayerListContainer} />
    <Route path="players" component={PlayerListContainer}/>
  </Route>
);
