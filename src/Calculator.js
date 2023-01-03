import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Actions} from 'react-native-router-flux';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: '',
      bmi: '',
      BmiResult: '',
    };
  }

  async authenticate() {
    if (this.state.height == '' || this.state.weight == '') {
      Alert.alert('Uyarı', 'Lütfen Boy ve Kilo giriniz! ', [
        {
          text: 'Tamam',
          onPress: () => null,
        },
      ]);
    } else {
      this.setState({loading: true, message: ''});

      this.setState({loading: false});

      Actions.main({type: 'replace'});
      this.setState({loading: false, message: ''});
    }
  }

  handleHeight = text => {
    this.setState({height: text});
  };
  handleWeight = text => {
    this.setState({weight: text});
  };
  calculate = async (height, weight) => {
    //calculation
    if (this.state.height == '' || this.state.weight == '') {
      Alert.alert('Uyarı', 'Lütfen Boy ve Kilo giriniz! ', [
        {
          text: 'Tamam',
          onPress: () => null,
        },
      ]);
    } else {
      await AsyncStorage.removeItem('height');
      await AsyncStorage.removeItem('weight');
      await AsyncStorage.removeItem('bmi');
      await AsyncStorage.removeItem('BmiResult');
      var result =
        (parseFloat(weight) * 10000) /
        (parseFloat(height) * parseFloat(height));
      result = result.toFixed(2);
      //display result
      this.setState({bmi: result});
      if (result < 18.5) {
        this.setState({BmiResult: 'Underweight'});
      } else if (result >= 18.5 && result < 25) {
        this.setState({BmiResult: 'Normal weight'});
      } else if (result >= 25 && result < 30) {
        this.setState({BmiResult: 'Overweight'});
      } else if (result >= 30) {
        this.setState({BmiResult: 'Obese'});
      } else {
        alert('Incorrect Input!');
        this.setState({BmiResult: ''});
      }

      await AsyncStorage.setItem('height', this.state.height);
      await AsyncStorage.setItem('weight', this.state.weight);
      await AsyncStorage.setItem('bmi', parse.toString(this.state.bmi));
      await AsyncStorage.setItem('BmiResult', this.state.BmiResult);
    }
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Icon
          name="chevron-left"
          size={28}
          color="#0006"
          style={{marginTop: 10, paddingLeft: 15}}
          onPress={() => Actions.pop('healthcareScreen')}
        />
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'flex-start',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              backgroundColor: 'black',
              alignSelf: 'center',
              height: '17.5%',
              borderWidth: 1,
            }}>
            <Text style={styles.title}>BMI Calculator</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 15,
            }}>
            <Icon name="human-male-height" style={styles.icon} size={28}>
              {' '}
            </Icon>
            <Text style={styles.label}>Height</Text>
          </View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Height (Cm)"
            autoCapitalize="none"
            value={this.state.height}
            onChangeText={this.handleHeight}
          />
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Icon name="weight-kilogram" style={styles.icon} size={28}>
              {' '}
            </Icon>
            <Text style={styles.label}>Weight</Text>
          </View>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Weight (Kg)"
            autoCapitalize="none"
            value={this.state.weight}
            onChangeText={this.handleWeight}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() =>
              this.calculate(this.state.height, this.state.weight)
            }>
            <Text style={styles.submitButtonText}> Calculate </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'flex-start',
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              backgroundColor: 'black',
              alignSelf: 'center',
              height: '17%',
              top: 12,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                paddingLeft: 20,
                fontWeight: '400',
                color: '#fff',
                marginTop: 4,
              }}>
              {' '}
              Result
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#fff',
              elevation: 5,
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
              flexDirection: 'row',
              height: '30%',
              width: '100%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'left',
                color: '#000',
                paddingLeft: 20,
                marginTop: 30,
              }}>
              {' '}
              BMI:{' '}
            </Text>
            <Text style={styles.output}>{this.state.bmi} </Text>

            <Text
              style={{
                fontSize: 20,
                textAlign: 'left',
                color: '#000',
                paddingLeft: 20,
                marginTop: 30,
              }}>
              {' '}
              FAT:{' '}
            </Text>
            <Text style={styles.resultText}>{this.state.BmiResult}</Text>
          </View>

          <Image
            style={{
              width: '80%',
              height: ' 80%',
              position: 'absolute',
              top: 510,
              alignSelf: 'center',
            }}
            source={{
              uri: 'https://www.dietistmandybreure.nl/uploads/news/bmi.e49b62.jpg',
            }}
          />
        </View>
      </View>
    );
  }
}
export default Calculator;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: '35%',
    backgroundColor: '#fff',
    borderRadius: 25,
    width: '90%',
    alignSelf: 'center',
    elevation: 5,
  },
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    paddingLeft: 17,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 10,
    marginTop: 40,
    height: 45,
    borderRadius: 20,
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
    // fontWeight:"bold",
    fontSize: 17,
  },
  output: {
    textAlign: 'right',
    fontSize: 20,
    color: '#20b2aa',
    marginTop: 30,
    marginLeft: 5,
  },
  title: {
    paddingLeft: 20,
    paddingBottom: 10,
    textAlign: 'left',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 6,
  },
  resultText: {
    textAlign: 'left',
    fontSize: 20,
    color: '#20b2aa',
    marginTop: 30,
  },
  label: {
    marginLeft: 5,
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
    top: 5,
  },
  icon: {
    marginLeft: 30,
    color: '#000',
  },
});
