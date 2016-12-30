import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
const {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

class Counter extends Component {

  decrementCounter() {
    this.props.decrementCounter();
  }

  incrementCounter() {
    this.props.incrementCounter();
  }

  render() {
    return (
      <View>
        <View style={{marginTop:20}}>
          <TouchableHighlight onPress={() => {this.decrementCounter()}}><Text>-</Text></TouchableHighlight>
          <Text style={{marginTop:20}}>{ this.props.count }</Text>
          <TouchableHighlight onPress={() => {this.incrementCounter()}}><Text>+</Text></TouchableHighlight>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);

