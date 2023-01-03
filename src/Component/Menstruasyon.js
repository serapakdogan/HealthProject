import React, {useState} from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

const {width, height} = Dimensions.get('window');

LocaleConfig.locales['fr'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Janv.',
    'Febr.',
    'Marc',
    'April',
    'May',
    'June',
    'July.',
    'August',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  today: ' 2 March 2022',
};
LocaleConfig.defaultLocale = ['fr'];

const Menstruasyon = () => {
  const [markedDates, setMarkedDates] = useState({
    '2022-03-02': {marked: true, dotColor: '#50cebb'},
    '2022-03-03': {marked: true, dotColor: '#50cebb'},
    '2022-03-08': {startingDay: true, color: '#50cebb', textColor: 'white'},
    '2022-03-09': {color: '#70d7c7', textColor: 'white'},
    '2022-03-10': {
      color: '#70d7c7',
      textColor: 'white',
      marked: true,
      dotColor: 'white',
    },
    '2022-03-11': {color: '#70d7c7', textColor: 'white'},
    '2022-03-12': {endingDay: true, color: '#50cebb', textColor: 'white'},
  });

  const handleDayPress = day => {
    setMarkedDates({
      [day.dateString]: {
        startingDay: true,
        color: '#50cebb',
      },
      [moment(day.dateString).add(1, 'days').format('YYYY-MM-DD')]: {
        color: '#70d7c7',
      },
      [moment(day.dateString).add(2, 'days').format('YYYY-MM-DD')]: {
        color: '#70d7c7',
      },
      [moment(day.dateString).add(3, 'days').format('YYYY-MM-DD')]: {
        color: '#70d7c7',
      },
      [moment(day.dateString).add(4, 'days').format('YYYY-MM-DD')]: {
        endingDay: true,
        color: '#50cebb',
      },
    });
  };

  return (
    <View
      style={{backgroundColor: '#f5e3ff', borderRadius: 80, height: height}}>
      <View
        style={{
          backgroundColor: '#ab66ea',
          height: 110,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'monospace',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#ffff',
            margin: 30,
          }}>
          {' '}
          Ovulation Period
        </Text>
        <Text
          style={{
            fontFamily: 'monospace',
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#ffff',
            paddingLeft: 30,
            bottom: 17,
          }}>
          {' '}
          Track your menstrual cycle
        </Text>
        <Icon
          name="calendar"
          size={55}
          color="#fff"
          style={{textAlign: 'right', bottom: 65, right: 50}}>
          {' '}
        </Icon>
      </View>

      <Calendar
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#fff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#000',
          textDisabledColor: '#d9e1e8',
          selectedDotColor: '#ffffff',
          arrowColor: 'black',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: 'black',
          indicatorColor: 'blue',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 14,
        }}
        style={{
          borderWidth: 5,
          borderColor: '#b29aff',
          height: 360,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 30,
          borderRadius: 30,
          elevation: 7,
        }}
        markedDates={markedDates}
        markingType={'period'}
        onDayPress={handleDayPress}
      />

      <View
        style={{
          backgroundColor: '#ffff',
          height: 120,
          width: 380,
          borderRadius: 20,
          margin: 20,
          alignSelf:'center',
          justifyContent: 'center',
          borderWidth: 5,
          borderColor: '#ab66ea',
        }}>
        <Text
          style={{
            fontFamily: 'monospace',
            fontSize: 15,
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#000',
            paddingLeft: 30,
            bottom: 18,
          }}>
          TODAY: 2 March 2022
        </Text>
        <Text
          style={{
            fontFamily: 'monospace',
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#000',
            paddingLeft: 30,
            justifyContent: 'space-between',
          }}>
          The last 5 days left on the period.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#ffff',
          height: 60,
          width: 380,
          borderRadius: 15,
          marginTop:10,
          alignSelf:'center',
          justifyContent: 'center',
          borderWidth: 5,
          borderColor: '#ab66ea',
        }}> 
              <Text
          style={{
            fontFamily: 'monospace',
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'left',
            color: '#000',
            paddingLeft: 30,
            justifyContent: 'space-between',
          }}>
          Low risk of getting pregnant
        </Text>
        
        
        </View>
    </View>
  );
};

export default Menstruasyon;
