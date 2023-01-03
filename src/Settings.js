import React, {Component} from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Actions} from 'react-native-router-flux';
import Notifications from './Component/Notifications';
import {Button} from './Component/Button';

const {width, height} = Dimensions.get('window');

class Settings extends Component {
  alertDeletefunc() {
    Alert.alert('Delete Account', 'Do you want to delete your account?', [
      {text: 'NO', onPress: () => null},
      {text: 'YES', onPress: () => this.deleteButton()},
    ]);
  }

  alertExitfunc() {
    Alert.alert('Delete Account', 'Do you want to delete your account?', [
      {text: 'NO', onPress: () => null},
      {text: 'YES', onPress: () => this.exitButton()},
    ]);
  }

  async exitButton() {
    await AsyncStorage.removeItem('password');
    Actions.loginandregister({type: 'replace'});
  }
  async deleteButton() {
    await AsyncStorage.removeItem('password');
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('LoggedIn');
    Actions.loginandregister({type: 'replace'});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: height * 0.07,
            backgroundColor: 'white',
            elevation: 5,
          }}>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '600',
              textAlign: 'center',
              color: '#000',
              marginTop: 13,
            }}>
            Settings
          </Text>
          <Icon
            name="chevron-back-outline"
            size={27}
            color="#0006"
            style={{bottom: 27, paddingLeft: 10}}
            onPress={() => Actions.pop()}
          />
        </View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            color: '#000',
            textAlign: 'left',
            paddingLeft: 10,
            marginTop: 10,
          }}>
          {' '}
          ACCOUNT
        </Text>
        <View
          style={{
            marginTop: 15,
            backgroundColor: '#fff',
            height: height * 0.05,
            flexDirection: 'row',
          }}>
          <Icon
            name="person-outline"
            size={21}
            color="#0006"
            style={{top: 8, paddingLeft: 14}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '400',
              alignSelf: 'center',
              paddingLeft: 10,
            }}>
            {' '}
            Edit Profile{' '}
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={26}
            color="#0006"
            style={{
              textAlign: 'right',
              color: '#0006',
              left: 245,
              alignSelf: 'center',
            }}
            onPress={() => null}
          />
        </View>
        <View
          style={{
            elevation: 2,
            backgroundColor: '#fff',
            height: height * 0.05,
            flexDirection: 'row',
          }}>
          <Icon
            name="person-outline"
            size={21}
            color="#0006"
            style={{top: 8, paddingLeft: 14}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '400',
              alignSelf: 'center',
              paddingLeft: 10,
            }}>
            {' '}
            Change Password{' '}
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={26}
            color="#0006"
            style={{
              textAlign: 'right',
              color: '#0006',
              left: 192,
              alignSelf: 'center',
            }}
            onPress={() => Actions.push('')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            height: height * 0.05,
            flexDirection: 'row',
          }}>
          <Icon
            name="share-social-outline"
            size={21}
            color="#0006"
            style={{top: 8, paddingLeft: 14}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '400',
              alignSelf: 'center',
              paddingLeft: 10,
            }}>
            {' '}
            Link Account{' '}
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={26}
            color="#0006"
            style={{
              textAlign: 'right',
              color: '#0006',
              left: 228,
              alignSelf: 'center',
            }}
            onPress={() => Actions.push('')}
          />
        </View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            color: '#000',
            textAlign: 'left',
            paddingLeft: 10,
            marginTop: 30,
          }}>
          {' '}
          NOTİFİCATİONS
        </Text>
        <View
          style={{
            marginTop: 15,
            backgroundColor: '#fff',
            height: height * 0.05,
            flexDirection: 'row',
          }}>
          <Icon
            name="notifications-outline"
            size={21}
            color="#0006"
            style={{top: 8, paddingLeft: 14}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '400',
              alignSelf: 'center',
              paddingLeft: 10,
            }}>
            {' '}
            Notifications{' '}
          </Text>
          <View
            style={{left: 210, alignItems: 'center', justifyContent: 'center'}}>
            <Notifications></Notifications>
          </View>
        </View>
        <View
          style={{
            elevation: 2,
            backgroundColor: '#fff',
            height: height * 0.05,
            flexDirection: 'row',
          }}>
          <Icon
            name="mail-outline"
            size={21}
            color="#0006"
            style={{top: 8, paddingLeft: 14}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '400',
              alignSelf: 'center',
              paddingLeft: 10,
            }}>
            {' '}
            E-mail Notifications{' '}
          </Text>
          <Notifications></Notifications>
        </View>
        <Text
          style={{
            fontSize: 13,
            fontWeight: '400',
            color: '#000',
            textAlign: 'left',
            paddingLeft: 10,
            marginTop: 10,
          }}>
          {' '}
          SUPPORT
        </Text>
        <View
          style={{
            marginTop: 15,
            backgroundColor: '#fff',
            height: height * 0.05,
            flexDirection: 'row',
          }}>
          <Icon
            name="help-circle-outline"
            size={21}
            color="#0006"
            style={{top: 8, paddingLeft: 14}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '400',
              alignSelf: 'center',
              paddingLeft: 10,
            }}>
            {' '}
            Help{' '}
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={26}
            color="#0006"
            style={{
              textAlign: 'right',
              color: '#0006',
              left: 286,
              alignSelf: 'center',
            }}
            onPress={() => Actions.push('')}
          />
        </View>
        <View
          style={{
            elevation: 2,
            backgroundColor: '#fff',
            height: height * 0.05,
            flexDirection: 'row',
          }}>
          <Icon
            name="person-outline"
            size={21}
            color="#0006"
            style={{top: 8, paddingLeft: 14}}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '400',
              alignSelf: 'center',
              paddingLeft: 10,
            }}>
            {' '}
            FAQs{' '}
          </Text>
          <Icon
            name="chevron-forward-outline"
            size={26}
            color="#0006"
            style={{
              textAlign: 'right',
              color: '#0006',
              left: 281,
              alignSelf: 'center',
            }}
            onPress={() => Actions.push()}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            width: '60%',
            alignSelf: 'center',
            backgroundColor: '#2f4f4f',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#2f4f4f',
          }}>
          <Button onPress={() => this.alertExitfunc()}> LOG OUT </Button>
        </View>
        <View
          style={{
            marginTop: 30,
            width: '60%',
            alignSelf: 'center',
            backgroundColor: '#2f4f4f',
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#2f4f4f',
          }}>
          <Button onPress={() => this.alertDeletefunc()}>Delete Account</Button>
        </View>
      </View>
    );
  }
}

export default Settings;
