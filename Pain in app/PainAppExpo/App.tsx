import React, {Component} from 'react';
import {View, ActivityIndicator, BackHandler} from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';

import SwitchNavigator from "App/navigation/SwitchNavigator"

import store from 'redux/store';
const MainNavigator = createAppContainer(SwitchNavigator);

export default class App extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      isReady: true,
    };
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({isReady: true});
  }

  render() {
    return this.state.isReady ? (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <MainNavigator />
        </View>
      </Provider>
    ) : (
      <View
        style={{
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color={'#000000'} />
      </View>
    );
  }
}
