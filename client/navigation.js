import React, { useState, useEffect } from 'react';
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
import SelectScreen from './screens/SelectCrops';
import CropDoctorHomeScreen from './screens/CropDoctorHomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChangeLocation from './AdditionalScreens/ChangeLocation';
import CropDoctorScreen from './AdditionalScreens/CropDoctorScreen';
import WeatherScreen from './AdditionalScreens/WeatherScreen';
import SettingsScreen from './AdditionalScreens/SettingsScreen';
import InviteFriendScreen from './AdditionalScreens/InviteFriendScreen';
import MyOrders from './AdditionalScreens/MyOrders';
import ManageCrops from './AdditionalScreens/ManageCrops';
import ChangeLanguageScreen from './AdditionalScreens/ChangeLangScreen';
import JunnarScreen from './MerchantScreens/JunnarScreen';
import KhedScreen from './MerchantScreens/KhedScreen';
import PimpriScreen from './MerchantScreens/PimpriScreen';
import SataraScreen from './MerchantScreens/SataraScreen';
import WaiScreen from './MerchantScreens/WaiScreen';
import ExpertArticles from './AdditionalScreens/ExpertArticles';
import GovernmentSchemesScreen from './AdditionalScreens/GovernmentSchemesScreen';
import EventsScreen from './AdditionalScreens/EventsScreen';
import NewsScreen from './AdditionalScreens/NewsScreen';
import CommmingSoonScreen from './AdditionalScreens/CommingSoonScreen';
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 5000); 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {splashVisible ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <Stack.Screen name="Screen1" component={FirstScreen} />
            <Stack.Screen name="LangScreen" component={ChangeLang} />
            <Stack.Screen name="VerifyNumScreen" component={VerifyMobile} />
            <Stack.Screen name="VerifyOTPScreen" component={VerifyOTP} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MandiScreen" component={MandiScreen} />
            <Stack.Screen name="CropDoctorHome" component={CropDoctorHomeScreen} />
            <Stack.Screen name="MoreScreen" component={MoreScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="SearchScreen" component={Search} />
            <Stack.Screen name="SettingScreen" component={SettingsScreen} />
            <Stack.Screen name="SelectCropScreen" component={SelectScreen} />

            {/* Additional Screens */}
            <Stack.Screen name="LocationScreen" component={ChangeLocation} />
            <Stack.Screen name="CropDoctorScreen" component={CropDoctorScreen} />
            <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
            <Stack.Screen name="InviteFriendScreen" component={InviteFriendScreen} />
            <Stack.Screen name="MyOrderScreen" component={MyOrders} />
            <Stack.Screen name="ChangeLanguageScreen2" component={ChangeLanguageScreen} />
            <Stack.Screen name='ManageCropScreen' component={ManageCrops} />
            <Stack.Screen name='Events' component={EventsScreen} />
            <Stack.Screen name='News' component={NewsScreen} />
            <Stack.Screen name='GovernmentSchemes' component={GovernmentSchemesScreen} />
            <Stack.Screen name='ExpertArticlesScreen' component={ExpertArticles} />
            <Stack.Screen name='CommingSoon' component={CommmingSoonScreen} />

            {/* Merchant Screens */}
            <Stack.Screen name="JunnarScreen" component={JunnarScreen} />
            <Stack.Screen name="KhedScreen" component={KhedScreen} />
            <Stack.Screen name="PimpriScreen" component={PimpriScreen} />
            <Stack.Screen name="SataraScreen" component={SataraScreen} />
            <Stack.Screen name="WaiScreen" component={WaiScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
