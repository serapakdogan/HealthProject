import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Recipes1 extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://www.seriouseats.com/grilling-italian-style-meatballs-with-pecorin'
        }}
      
      />
    );
  }
}

export default Recipes1;