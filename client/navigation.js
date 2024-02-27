import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './screens/Search';
import HomeScreen from './screens/HomeScreen';
import FirstScreen from './screens/FirstScreen';
import VerifyMobile from './screens/VerifyMobile';
import VerifyOTP from './screens/VerifyOTP';
import MandiScreen from './screens/MandiScreen';
import ChangeLang from './screens/ChangeLang';
import MoreScreen from './screens/MoreScreen';
import ManageFinancesScreen from './screens/ManageFinancesScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChangeLocation from './AdditionalScreens/ChangeLocation';
import CropDoctorScreen from './AdditionalScreens/CropDoctorScreen';
import WeatherScreen from './AdditionalScreens/WeatherScreen';
import SettingsScreen from './AdditionalScreens/SettingsScreen';
const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
          {/* <Stack.Screen name="Screen1" component={FirstScreen} /> 
          <Stack.Screen name="LangScreen" component={ChangeLang} />
          <Stack.Screen name="VerifyNumScreen" component={VerifyMobile} />
          <Stack.Screen name="VerifyOTPScreen" component={VerifyOTP} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MandiScreen" component={MandiScreen} />
          <Stack.Screen name="FinacesScreen" component={ManageFinancesScreen} />
          <Stack.Screen name="MoreScreen" component={MoreScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="SearchScreen" component={Search} />
          <Stack.Screen name="SettingScreen" component={SettingsScreen} /> */}

          {/* Additonal Screens */}
          {/* <Stack.Screen name="LocationScreen" component={ChangeLocation} /> */}
          {/* <Stack.Screen name="CropDoctorScreen" component={CropDoctorScreen} /> */}
          <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}