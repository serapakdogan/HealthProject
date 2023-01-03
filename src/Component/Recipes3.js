import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Recipes3 extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://www.mealgarden.com/recipe/avocado-toast-with-egg/'
        }}
      
      />
    );
  }
}

export default Recipes3;