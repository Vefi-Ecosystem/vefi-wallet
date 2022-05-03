import React from 'react';
import { useFonts } from 'expo-font';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Onboarding from './src/screens/Onboarding';

export default function App() {
  const [fontsLoaded] = useFonts({
    Sf: require('./assets/fonts/SfUI.ttf'),
    SfSemiBold: require('./assets/fonts/SfUiSemiBold.ttf'),
    GilroySemiBold: require('./assets/fonts/GilroySemiBold.ttf'),
    GilroyMedium: require('./assets/fonts/GilroyMedium.ttf'),
    Poppins_600SemiBold,
    Roboto_500Medium
  });

  return !fontsLoaded ? <AppLoading /> : <Onboarding />;
}
