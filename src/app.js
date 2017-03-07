/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from './actions'
import { Button } from './components/common'

class App extends Component {
  state = {
    animationType: 'slide',
    transparent: true
  };
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.showModal("What your name?")}>
          Open PopUp
        </Button>
        <Modal
          animationType={this.state.animationType}
          visible={this.props.modal.isShowing}
          onRequestClose={() => this.props.hideModal()}
          transparent={this.state.transparent}
        >
          <View style={styles.container}>
            <Text style={styles.textStyle}>{this.props.modal.message}</Text>
            <Button onPress={() => this.props.hideModal()}>
              Close
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

const mapStateToProps = state => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, actions)(App);