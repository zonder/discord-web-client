import React, { PropTypes } from 'react'
import { createStore, applyMiddleware  } from 'redux'
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk'
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

//import FriendsContainer from './Friends'
import GamesListContainer from './GamesList'
import { getMyGames } from '../actions/games'
import reducers from '../reducers'

const middleware = [ thunk ];
const store = createStore(reducers, applyMiddleware(...middleware));

store.dispatch(getMyGames())

const Root = () => (
  <Provider store={store}>
    <GamesListContainer />
  </Provider>
);
/*
Root.propTypes = {
  store: PropTypes.object.isRequired,
};*/

export default Root;