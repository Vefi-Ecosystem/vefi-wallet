import './global';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import React from 'react';
import { useFonts } from 'expo-font';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/states/store';
// import Onboarding from './src/screens/Onboarding';
import Navigation from './src/navigation';
import { ThemeContextProvider } from './src/contexts/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Sf: require('./assets/fonts/SfUI.ttf'),
    SfSemiBold: require('./assets/fonts/SfUiSemiBold.ttf'),
    GilroySemiBold: require('./assets/fonts/GilroySemiBold.ttf'),
    GilroyMedium: require('./assets/fonts/GilroyMedium.ttf'),
    PoppinsSemiBold: Poppins_600SemiBold,
    RobotoMedium: Roboto_500Medium
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <ThemeContextProvider>
      <StoreProvider store={store}>
        <Navigation />
      </StoreProvider>
    </ThemeContextProvider>
  );
}
