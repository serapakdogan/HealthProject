import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');

class Healthcare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: '',
      BmiResult: '',
    };
  }

  getData = async () => {
    try {
      const bmi = await AsyncStorage.getItem('bmi');
      if (bmi !== null) {
        console.log(bmi);
        bmi = parseInt(bmi);
      }
    } catch (error) {}
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: height * 0.07,
            width: width,
            backgroundColor: 'white',
            elevation: 5,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Icon
            name="menu"
            size={28}
            color="#000"
            style={{paddingLeft: 10}}
            onPress={() => Actions.push('DietScreens')}
          />
          <Text
            style={{
              fontSize: 22,
              textAlign: 'center',
              color: '#000',
              fontFamily: 'cochin',
            }}>
            Health Care
          </Text>
          <Icon
            name="person-outline"
            size={28}
            color="#000"
            style={{paddingRight: 10}}
            onPress={() => Actions.push('settings')}
          />
        </View>
        <ScrollView>
          <View style={{width: width, height: height, marginTop: 10}}>
            <View
              style={{
                width: width,
                height: height * 0.21,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => Actions.push('calculatorScreen')}
                on
                style={{
                  width: '43%',
                  height: '89%',
                  backgroundColor: 'turquoise',
                  borderRadius: 10,
                  margin: 10,
                  elevation: 7,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    textAlign: 'center',
                    margin: 12,
                    color: 'white',
                    fontWeight: '600',
                  }}>
                  {' '}
                  Body Mass Index{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: 'center',
                    margin: 18,
                    color: 'white',
                    fontWeight: '700',
                  }}>
                  18,67
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '43%',
                  height: '89%',
                  backgroundColor: '#a3ffd1',
                  borderRadius: 10,
                  margin: 10,
                  elevation: 7,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    textAlign: 'center',
                    margin: 12,
                    color: 'white',
                    fontWeight: '600',
                  }}>
                  {' '}
                  Calories Burned{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: 'center',
                    margin: 18,
                    color: 'white',
                    fontWeight: '700',
                  }}>
                  948 cal
                </Text>
              </View>
            </View>
            <View
              style={{
                width: width,
                height: height * 0.21,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => Actions.push('calculatorScreen')}
                on
                style={{
                  width: '43%',
                  height: '89%',
                  backgroundColor: 'pink',
                  borderRadius: 10,
                  margin: 10,
                  elevation: 7,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    textAlign: 'center',
                    margin: 12,
                    color: 'white',
                    fontWeight: '600',
                  }}>
                  {' '}
                  Calories İntake{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: 'center',
                    margin: 18,
                    color: 'white',
                    fontWeight: '700',
                  }}>
                  1850 cal
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: '43%',
                  height: '89%',
                  backgroundColor: '#b28cff',
                  borderRadius: 10,
                  margin: 10,
                  elevation: 7,
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    textAlign: 'center',
                    margin: 12,
                    color: '#fff',
                    fontWeight: '500',
                  }}>
                  {' '}
                  Water Consumed{' '}
                </Text>
                <TextInput
                  placeholder=" "
                  placeholderTextColor="#544"
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: 'transparent',
                    textAlign: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    color: 'white',
                  }}></TextInput>
              </View>
            </View>
            <View
              style={{
                width: '90%',
                height: '10%',
                backgroundColor: '#fff',
                alignSelf: 'center',
                borderLeftColor: '#ab66ea',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderLeftWidth: 10,
                marginTop: 18,
                elevation: 3,
              }}>
              <Text style={{padding: 10, fontSize: 15, color: '#ab66ea'}}>
                {' '}
                Ovulation Period
              </Text>
              <Text style={{padding: 10, fontSize: 14, color: 'black', bottom:8}}>
                {' '}
                The last 5 days left on the period.
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                height: '10%',
                backgroundColor: '#fff',
                alignSelf: 'center',
                borderLeftColor: '#26a8ff',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderLeftWidth: 10,
                marginTop: 18,
                elevation: 3,
              }}>
              <Text style={{padding: 10, fontSize: 15, color: '#26a8ff'}}>
                {' '}
                Body Weight
              </Text>
               <TextInput
                  placeholder=" "
                  placeholderTextColor="#544"
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: 'transparent',
                    textAlign: 'left',
                    marginTop:-12,
                    paddingLeft:25,
                    fontSize: 15,
                    color: 'black',
                  }}></TextInput>

            </View>
            <View
              style={{
                width: '90%',
                height: '10%',
                backgroundColor: '#fff',
                alignSelf: 'center',
                borderLeftColor: '#0005',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderLeftWidth: 10,
                marginTop: 18,
                elevation: 3,
              }}>
              <Text style={{padding: 10, fontSize: 15, color: '#0005'}}>
                {' '}
                Body Height
              </Text>
              <TextInput
                  placeholder=" "
                  placeholderTextColor="#544"
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: 'transparent',
                    textAlign: 'left',
                    marginTop:-12,
                    paddingLeft:25,
                    fontSize: 15,
                    color: 'black',
                  }}></TextInput>

            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Healthcare;
