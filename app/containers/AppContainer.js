import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

const {
  View,
  Text
} = ReactNative;

class AppContainer extends Component {
  render() {
    return (
      <View>
        <Text style={{marginTop:20}}>App Container!!!</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {}; }, mapDispatchToProps)(AppContainer);