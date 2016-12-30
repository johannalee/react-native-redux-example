import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';

const {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
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
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => {this.decrementCounter()}}
            style={styles.redBtn}>
            <Text style={styles.btnText}>-</Text>
          </TouchableHighlight>

          <Text style={styles.label}>{this.props.count}</Text>

          <TouchableHighlight
            onPress={() => {this.incrementCounter()}}
            style={styles.blueBtn}>
            <Text style={styles.btnText}>+</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  label: {
    textAlign: 'center',
    fontSize: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  redBtn: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#dc143c",
  },
  blueBtn: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: "#4169e1",
  },
  btnText: {
    fontSize: 40,
  }
});

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter);

