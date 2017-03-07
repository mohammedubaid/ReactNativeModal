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
  Image,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { CheckboxField, Checkbox } from 'react-native-checkbox-field';
import * as actions from './actions'
import { Button, CardSection } from './components/common'

class App extends Component {
  constructor(props){

    super(props);

    this.state = {
      animationType: 'fade',
      transparent: true,
      checkboxValue: false,
      checkboxLabel: 'Quick Pay via Wallet'
    };
    this.selectCheckbox = this.selectCheckbox.bind(this);  
  }

  selectCheckbox() {
    this.setState({
      checkboxValue: !this.state.checkboxValue
    });
  }

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
          <View style={styles.modalContainer}>
            <View style={styles.modalBody}>
              <CardSection>
                <View style={styles.container}>
                  <Image
                    style={styles.splitImage}
                    source={{ uri: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png" }}
                  />
                  <Text>FlatMates has 11 Members</Text>
                </View>
              </CardSection>
              <CardSection>
                  <View style={styles.splitThumbnailContainer}>
                    <Image
                      style={styles.splitImage}
                      source={{ uri: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png" }}
                    />
                  </View>
                  <View style={styles.splitType}>
                    <Text style={styles.splitTextTitle}>Split Equally</Text>
                    <Text>$1.36 per packet</Text>
                  </View>
                  <View style={styles.splitThumbnailContainer}>
                    <Image
                      style={styles.splitImage}
                      source={{ uri: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png" }}
                    />
                  </View>
                  <View style={styles.splitType}>
                    <Text style={styles.splitTextTitle}>Split Randomly</Text>
                    <Text>Random amounts</Text>
                  </View>
              </CardSection>
              <CardSection>
                <View style={styles.checkboxContainer}>
                  <CheckboxField
                    onSelect={this.selectCheckbox}
                    selected={this.state.checkboxValue}
                    checkboxStyle={styles.checkboxStyle}
                    selectedColor="#247fd2"
                    labelSide="left">
                  </CheckboxField>
                  <Text style={styles.labelStyle}>{this.state.checkboxLabel}</Text>
                </View>
                <View>
                  <Text>Wallet Bal:</Text>
                  <Text>$24.97</Text>
                </View>
              </CardSection>
              <Button onPress={() => this.props.hideModal()}>
                Close
              </Button>
            </View>
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
    backgroundColor: '#FFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalBody: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    padding: 20,
    margin: 5,
    borderRadius: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  splitImage: {
    height: 20,
    width: 20,
    borderRadius: 10
  },
  splitThumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  splitType: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  splitTextTitle: {
    fontSize: 18
  },
  labelStyle: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  checkboxStyle: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: -10
  },
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
  }
});

const mapStateToProps = state => {
  return { modal: state.modal };
};

export default connect(mapStateToProps, actions)(App);