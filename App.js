import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import VButton from './src/components/VButton';
import { useFonts } from 'expo-font';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sf: require('./assets/fonts/SfUI.ttf'),
    Gilroy: require('./assets/fonts/Gilroy.ttf'),
    Roboto_500Medium,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <VButton label="Label" />
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
