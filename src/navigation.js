import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/onboarding/Onboarding';
import EnableNotifications from './screens/onboarding/EnableNotifications';

const { Group, Navigator, Screen } = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Group screenOptions={{ headerShown: false }}>
          {/* <Screen name="onboarding" component={Onboarding} /> */}
          <Screen name="notifications" component={EnableNotifications} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
