import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Recipes4 extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'http://gourmetwithblakely.com/no-bake-energy-bites/'
        }}
      
      />
    );
  }
}

export default Recipes4;