import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding/Onboarding';
import EnableNotifications from './screens/onboarding/EnableNotifications';
import WalletBackup from './screens/onboarding/WalletBackup';
import Settings from './screens/auth/settings/Settings';
import SecretPhrase from './screens/onboarding/SecretPhrase';
import VerifySecretPhrase from './screens/onboarding/VerifySecretPhrase';
import Legal1And2 from './screens/onboarding/Legal1And2';
import PassCodeEntry1 from './screens/onboarding/PassCodeEntry1';
import CodeEntry from './screens/onboarding/CodeEntry';

const { Group, Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="onboarding">
        <Group screenOptions={{ headerShown: false }}>
          {/* {Onboarding} */}
          <Screen name="onboarding" component={Onboarding} />
          <Screen name="legal1And2" component={Legal1And2} />
          <Screen name="codeEntry" component={CodeEntry} />
          <Screen name="passCodeEntry1" component={PassCodeEntry1} />
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
