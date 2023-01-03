import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Recipes extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://minimalistbaker.com/favorite-smoothie-bowl-5-minutes/'
        }}
      
      />
    );
  }
}

export default Recipes;