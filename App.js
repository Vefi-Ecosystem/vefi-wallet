import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VButton from './src/components/Button/Button';
import { useFonts } from 'expo-font';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sf: require('./assets/fonts/SfUI.ttf'),
    GilroySemiBold: require('./assets/fonts/GilroySemiBold.ttf'),
    GilroyMedium: require('./assets/fonts/GilroyMedium.ttf'),
    Poppins_600SemiBold,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <VButton
          label="Send To A Single Wallet Address"
          onPress={() => alert('Button Pressed')}
          icon="arrow-up-circle-outline"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  }
});
