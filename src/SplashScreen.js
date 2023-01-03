import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: null, ussername: null, password: null};
    performTimeConsumingTask = async () => {
      return new Promise(resolve =>
        setTimeout(() => {
          resolve('result');
        }, 2000),
      );
    };

    GetLoggedType = async () => {
      try {
        var logged = await AsyncStorage.getItem('LoggedIn');
        var temp = JSON.parse(JSON.stringify(logged));
        if (temp === 'true') {
          this.setState({
            loggedIn: true,
          });
        } else {
          this.setState({
            loggedIn: false,
          });
        }
      } catch (e) {}
    };
    GetLoggedType();
    GetRememberType = async () => {
      try {
        var logged = await AsyncStorage.getItem('username');
        var temp = JSON.parse(JSON.stringify(logged));
        if (temp !== null) {
          this.setState({
            username: temp,
          });
        } else {
          this.setState({
            username: false,
          });
        }
      } catch (e) {}
    };
    GetRememberType();
    GetRememberPassType = async () => {
      try {
        var logged = await AsyncStorage.getItem('password');
        var temp = JSON.parse(JSON.stringify(logged));
        if (temp !== null) {
          this.setState({
            password: temp,
          });
        } else {
          this.setState({
            password: false,
          });
        }
      } catch (e) {}
    };
    GetRememberPassType();
  }

  async componentDidMount() {
    var data = await performTimeConsumingTask();
    if (data !== null) {
      if (this.state.username !== false || this.state.password !== false) {
        Actions.main({type: 'replace'});
      } else {
        Actions.loginandregister({type: 'replace'});
      }
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItem: 'center',
          backgroundColor: '	#F5F5F5',
        }}>
        <Image
          style={{
            width: 150,
            height: 150,
            resizeMode: 'cover',
            alignSelf: 'center',
            borderRadius: 20,
          }}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2020/06/24/05/29/tree-5334823_960_720.png',
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 10,
            textAlign: 'center',
          }}>
          {' '}
          Health Project
        </Text>
      </View>
    );
  }
}

export default SplashScreen;
