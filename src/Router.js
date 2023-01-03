import React from 'react';
import {Dimensions, View} from 'react-native';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import Login from './Component/Login';
import Register from './Register';
import Calculator from './Calculator';
import Healthcare from './Healthcare';
import SplashScreen from './SplashScreen';
import Diet from './Diet';
import Recipes from './Component/Recipes';
import Recipes1 from './Component/Recipes1';
import Recipes2 from './Component/Recipes2';
import Recipes3 from './Component/Recipes3';
import Recipes4 from './Component/Recipes4';
import Settings from './Settings';
import Notifications from './Component/Notifications';
import Menstruasyon from './Component/Menstruasyon';

const {width, height} = Dimensions.get('window');

const RouterComponent = () => {
  return (
    <Router sceneStyle={{marginTop: 65}}>
      <Stack key="root">
        <Scene
          key="SplashScreens"
          component={SplashScreen}
          titleStyle={{textAlign: 'center'}}
          title=" Açılış Ekranı "
          hideNavBar="true"
        />

        <Scene key="loginandregister" hideNavBar="true">
        <Scene
            key="loginScreen"
            component={Login}
            titleStyle={{textAlign: 'center'}}
            title=" Giriş Ekranı "
            hideNavBar="true"
          />
          <Scene
            key="registerScreen"
            component={Register}
            titleStyle={{textAlign: 'center'}}
            title=" Kayıt Ekranı "
            hideNavBar="true" 
          />
         
        </Scene>

        <Scene key="main" hideNavBar>
          <Scene
            key="healthcareScreen"
            component={Healthcare}
            titleStyle={{textAlign: 'center'}}
            title=" Healthcare Ekranı "
            hideNavBar="true" initial
          />
          <Scene
            key="calculatorScreen"
            component={Calculator}
            titleStyle={{textAlign: 'center'}}
            title=" BMI Ekranı "
            hideNavBar="true"
          />
          <Scene
            key="DietScreens"
            component={Diet}
            titleStyle={{textAlign: 'center'}}
            title=" Healthy Recipes Screen "
            hideNavBar="true"
          />
          <Scene
            key="recipes"
            component={Recipes}
            titleStyle={{textAlign: 'center'}}
            title=" Tarif Ekranı "
            hideNavBar="true"
          />
          <Scene
            key="recipes1"
            component={Recipes1}
            titleStyle={{textAlign: 'center'}}
            title=" Tarif Ekranı "
            hideNavBar="true"
          />
          <Scene
            key="recipes2"
            component={Recipes2}
            titleStyle={{textAlign: 'center'}}
            title=" Tarif Ekranı "
            hideNavBar="true"
          />
          <Scene
            key="recipes3"
            component={Recipes3}
            titleStyle={{textAlign: 'center'}}
            title=" Tarif Ekranı "
            hideNavBar="true"
          />
          <Scene
            key="recipes4"
            component={Recipes4}
            titleStyle={{textAlign: 'center'}}
            title=" Tarif Ekranı "
            hideNavBar="true"
          />
          <Scene
            key="settings"
            component={Settings}
            titleStyle={{textAlign: 'center'}}
            title=" Ayarlar Ekranı "
            hideNavBar="true" 
          />
          <Scene
            key="notifications"
            component={Notifications}
            titleStyle={{textAlign: 'center'}}
            title=" Ayarlar Ekranı "
            hideNavBar="true"
          />
            <Scene
            key="menstruasyon"
            component={Menstruasyon}
            titleStyle={{textAlign: 'center'}}
            title=" Regl Takvimi "
            hideNavBar="true" 
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default RouterComponent;
