import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Button} from './Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: null, username: null, password: null};
    GetLoggedType = async () => {
      try {
        var uname = await AsyncStorage.getItem('username');
        var temp = JSON.parse(JSON.stringify(uname));
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
    GetLoggedType();
  }

  async authenticate() {
    if (this.state.username == '' || this.state.password == '') {
      Alert.alert('Uyarı', 'Lütfen Kullanıcı Adı ve Şifre giriniz. ', [
        {
          text: 'Tamam',
          onPress: () => null,
        },
      ]);
    } else {
      this.setState({loading: true, message: ''});

      this.setState({loading: false});
      await AsyncStorage.setItem('username', this.state.username);
      await AsyncStorage.setItem('password', this.state.password);
      Actions.main({type: 'replace'});
      this.setState({loading: false, message: ''});
    }
  }

  render() {
    const {inputStyle} = styles;
    const image = {
      uri: 'https://cdn.pixabay.com/photo/2020/06/10/07/05/yoga-5281457_960_720.jpg',
    };
    return (
      <View style={{flex: 1}}>
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
          <View style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}}>
            <View
              style={{
                height: height * 0.1,
                justifyContent: 'flex-start',
                marginTop: 170,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 22,
                  fontFamily: 'Helvetica',
                  fontWeight: '700',
                }}>
                {' '}
                Log In{' '}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#012a',
                  fontSize: 14,
                  marginTop: 7,
                  fontWeight: '500',
                }}>
                {' '}
                Let's get to work{' '}
              </Text>
            </View>
            <View
              style={{
                height: height * 0.215,
                justifyContent: 'flex-start',
                alignContent: 'space-around',
              }}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#544"
                style={inputStyle}
                value={this.state.username}
                onChangeText={usern => this.setState({username: usern})}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#544"
                secureTextEntry
                style={inputStyle}
                value={this.state.password}
                onChangeText={pass => this.setState({password: pass})}
              />
              <TouchableOpacity
                onPress={() => Actions.push('forgotpasswordScreen')}>
                <Text
                  style={{
                    color: '#d3d3d3',
                    fontSize: 12,
                    marginTop: 13,
                    textAlign: 'right',
                    right: 28,
                    fontWeight: '500',
                  }}>
                  {' '}
                  FORGOT PASSWORD ?{' '}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '87%',
                alignSelf: 'center',
                backgroundColor: '#000',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#000',
              }}>
              <Button onPress={() => this.authenticate()}>LOG IN </Button>
            </View>

            <View
              style={{
                width: '87%',
                top: 50,
                alignSelf: 'center',
                backgroundColor: '#87ceeb',
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#87ceeb',
              }}>
              <Button onPress={() => Actions.push('')}>
                {' '}
                Continue as Guest{' '}
              </Button>
            </View>

            <View
              style={{
                height: height * 0.05,
                top: 190,
                flexDirection: 'row',
                paddingHorizontal: width * 0.1,
                alignItems: 'center',
                justifyContent: 'center',
                left: 15,
              }}>
              <Text
                style={{
                  width: width * 0.6,
                  textAlign: 'right',
                  alignItems: 'center',
                  color: '#d3d3d3',
                }}>
                {' '}
                Dont't have an account ?{' '}
              </Text>
              <TouchableOpacity onPress={() => Actions.push('')}>
                <Text
                  style={{
                    width: width * 0.5,
                    textAlign: 'left',
                    color: 'gray',
                    alignItems: 'center',
                    fontWeight: 'bold',
                  }}>
                  {' '}
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    borderColor: 'grey',
    borderWidth: width * 0.004,
    paddingLeft: 20,
    width: '87%',
    marginTop: 5,
    fontSize: 15,
    borderRadius: 30,
    height: '26%',
    backgroundColor: '#fff',
    marginLeft: 28,
  },
};

export default Login;
