import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding/Onboarding';
import EnableNotifications from './screens/onboarding/EnableNotifications';
import WalletBackup from './screens/onboarding/WalletBackup';
import Settings from './screens/auth/settings/Settings';
import SecretPhrase from './screens/onboarding/SecretPhrase';

const { Group, Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="secretPhrase">
        <Group screenOptions={{ headerShown: false }}>
          {/* {Onboarding} */}

          <Screen name="onboarding" component={Onboarding} />
          <Screen name="walletBackup" component={WalletBackup} />
          <Screen name="notifications" component={EnableNotifications} />
          <Screen name="secretPhrase" component={SecretPhrase} />

          {/* SETTINGS */}
          <Screen name="settings" component={Settings} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
