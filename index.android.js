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
  TextInput,
  View,
  Image,
  Platform
} from 'react-native';

class Greeting extends Component {
  constructor(props) {
      super(props);
      this.state = {
        showText: true
      };

      // Toggle the state every second
      // setInterval(() => {
      //   this.setState({ showText: !this.state.showText });
      // }, 1000);
  }

  componentWillMount() {
    console.log((Platform.OS === 'ios')?'iOS':'Android');
    console.log('componentWillMount');
  }

  render () {
    let display = this.state.showText ? 'Hello '+ this.props.name +'!': ' ';
    return (
      <Text style={{fontSize: 30, color: 'red'}}>{display}</Text>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => {
            this.setState({text});
            console.log(this.state.text);
          }}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          //{this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          {this.state.text}
        </Text>
      </View>
    );
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
