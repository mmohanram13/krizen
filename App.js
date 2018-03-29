import React, { Component } from 'react';
import {  
  View,
  Text,
  AppRegistry
} from 'react-native';

import LandingPage from './src/components/LandingPage';

export default class App extends Component {
  render() {
    return (
      <View>
        <LandingPage/>
      </View>
    );
  }
}
AppRegistry.registerComponent('krizen', ()=>LandingPage);