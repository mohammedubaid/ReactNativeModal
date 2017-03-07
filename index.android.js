/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'React'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './src/reducers';
import App from './src/app'

class Main extends Component{
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('modal_popup', () => Main);
