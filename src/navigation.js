import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding/Onboarding';
import EnableNotifications from './screens/onboarding/EnableNotifications';
import WalletBackup from './screens/onboarding/WalletBackup';
import Legal1And2 from './screens/Legal1And2';
import PassCodeEntry1 from './screens/PassCodeEntry1';
import CodeEntry from './screens/CodeEntry';

const { Group, Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Group screenOptions={{ headerShown: false }}>
          <Screen name="onboarding" component={Onboarding} />
          <Screen name="legal1And2" component={Legal1And2} />
          <Screen name="codeEntry" component={CodeEntry} />
          <Screen name="passCodeEntry1" component={PassCodeEntry1} />
          <Screen name="walletBackup" component={WalletBackup} />
          <Screen name="notifications" component={EnableNotifications} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
