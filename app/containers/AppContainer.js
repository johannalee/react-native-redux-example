import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';

const {
  View,
  Text,
  TouchableHighlight
} = ReactNative;

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount() {
    this.setState({count: this.state.count+1});
  }

  decrementCount() {
    this.setState({count: this.state.count-1});
  }

  render() {
    return (
      <View style={{marginTop:20}}>
        <TouchableHighlight onPress={() => {this.decrementCount()}}><Text>-</Text></TouchableHighlight>
        <Text style={{marginTop:20}}>{ this.state.count }</Text>
        <TouchableHighlight onPress={() => {this.incrementCount()}}><Text>+</Text></TouchableHighlight>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {}; }, mapDispatchToProps)(AppContainer);