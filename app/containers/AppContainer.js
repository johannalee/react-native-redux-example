import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import Counter from './Counter';

class AppContainer extends Component {
  incrementCount() {
    this.props.incrementCounter();
  }

  decrementCount() {
    this.props.decrementCounter();
  }

  render() {
    return (
      <Counter {...this.props} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {}; }, mapDispatchToProps)(AppContainer);