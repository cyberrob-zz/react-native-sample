/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button
} from 'react-native';
import { createStore } from 'redux'

// Define the initial state of our store
const initialState = { count: 0}

// Define a action type
const types = {
  INCREMENT: 'INCREMENT',
}

// Define a reducer for processing actions into store
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return {count: state.count + 1}
  }
  return state;
}

const store = createStore(reducer, initialState)

//let count = 0

store.dispatch({type: types.INCREMENT});
store.dispatch({type: types.INCREMENT});
store.dispatch({type: types.INCREMENT});

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0
    // };
  }

  render() {
    return (
      <View style={{flex: 1, padding: 22}}>
        <Button
          style={{margin: 10}}
          onPress={this.onButtonPress}
          title="Press Me"/>

        <Text style={styles.welcome}>Click counts: {store.getState().count}</Text>
      </View>
    );
  }

  onButtonPress = () => {
    console.log('button cliced.');
    store.dispatch({type: types.INCREMENT});
    // this.setState({count: this.state.count + 1}, function() {
    //     console.log('Button clicked ' + this.state.count + ' times');
    //     if(this.state.count === 5) {
    //       Alert.alert(
    //         'Limit of 5 reached.',
    //         'Your trial period is finished!',
    //         [
    //           {text: 'OK', onPress: () => this.onResetPress()},
    //         ],
    //         { cancelable: false },
    //         { onDismiss: () => { console.log('Can\'t be dismissed.'); }}
    //       );
    //     }
    // });


    //Alert.alert('Button clicked ' + count + ' times');
    //store.dispatch({type: types.INCREMENT})
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    color: 'cyan',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: 'green',
    textAlign: 'center',
    //color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
