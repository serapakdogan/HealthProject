import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Recipes2 extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://www.ambitiouskitchen.com/healthy-chicken-chickpea-chopped-salad/'
        }}
      
      />
    );
  }
}

export default Recipes2;