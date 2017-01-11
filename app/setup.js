import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducers';

import AppContainer from './containers/AppContainer';

import { createMiddleware } from 'redux-beacon';
import { logger } from 'redux-beacon/extensions/logger';
import { GoogleAnalytics } from 'redux-beacon/targets/react-native';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';

const target = GoogleAnalytics('UA-XXXXXXXX-Y', GoogleAnalyticsTracker);

const eventsMap = {
  'INCREMENT_COUNTER': {
    eventFields: (action, prevState) => ({
      hitType: 'event',
      eventCategory: 'Counter',
      eventAction: 'Increment',
    })
  },
  'DECREMENT_COUNTER': {
    eventFields: (action, prevState) => ({
      hitType: 'event',
      eventCategory: 'Counter',
      eventAction: 'Decrement',
    })
  },
};

const analyticsMiddleware = createMiddleware(eventsMap, target, { logger });
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      analyticsMiddleware,
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