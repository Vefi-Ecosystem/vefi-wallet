import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding/Onboarding';
import EnableNotifications from './screens/onboarding/EnableNotifications';
import WalletBackup from './screens/onboarding/WalletBackup';
import Settings from './screens/auth/settings/Settings';
import SecretPhrase from './screens/onboarding/SecretPhrase';
import VerifySecretPhrase from './screens/onboarding/VerifySecretPhrase';

const { Group, Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="verifySecretPhrase">
        <Group screenOptions={{ headerShown: false }}>
          {/* {Onboarding} */}

          <Screen name="onboarding" component={Onboarding} />
          <Screen name="walletBackup" component={WalletBackup} />
          <Screen name="notifications" component={EnableNotifications} />
          <Screen name="secretPhrase" component={SecretPhrase} />
          <Screen name="verifySecretPhrase" component={VerifySecretPhrase} />

          {/* SETTINGS */}
          <Screen name="settings" component={Settings} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
