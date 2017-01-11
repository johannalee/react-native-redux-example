import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';

import AppContainer from './containers/AppContainer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

import { AppRegistry } from 'react-native';

function setup() {
  class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <AppContainer />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup