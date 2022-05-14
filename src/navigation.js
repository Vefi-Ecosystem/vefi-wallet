import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Onboarding from './screens/onboarding/Onboarding';
import EnableNotifications from './screens/onboarding/EnableNotifications';
import WalletBackup from './screens/onboarding/WalletBackup';
import Settings from './screens/auth/settings/Settings';
import SecretPhrase from './screens/onboarding/SecretPhrase';
import VerifySecretPhrase from './screens/onboarding/VerifySecretPhrase';
import Legal1And2 from './screens/Legal1And2';
import PassCodeEntry1 from './screens/PassCodeEntry1';
import CodeEntry from './screens/CodeEntry';
import VIcon from './components/common/VIcon';
import * as colors from './constants/colors';
import { Image } from 'react-native';
import TabIcon from './components/common/TabIcon';
import { useTheme } from './contexts/theme';

const { Group, Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.lightGrey,
        tabBarLabelStyle: {
          fontFamily: 'Sf'
        },
        tabBarStyle: {
          backgroundColor: theme.mode == 'dark' ? colors.appBGDark : colors.white,
          borderTopWidth: 0
        },
        indicatorStyle: {
          height: 0,
          backgroundColor: 'pink'
        }
      }}
    >
      {/* <Tab.Screen
        name="Home"
        component={Onboarding}
        options={{
          tabBarIcon: ({ color }) => <VIcon name="home" size={25} color={color} />
        }}
      /> */}
      <Tab.Screen
        name="Wallet"
        component={Legal1And2}
        options={{
          tabBarIcon: ({ color }) => <TabIcon size={25} name="wallet-outline" color={color} />
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={SecretPhrase}
        options={{
          tabBarIcon: ({ color }) => <TabIcon size={25} name="grid-outline" color={color} />
        }}
      />
      <Tab.Screen
        name="Dex"
        component={VerifySecretPhrase}
        options={{
          tabBarIcon: ({ color }) => {
            console.log(color);
            if (color == '#105DCF') {
              return <Image source={require('../assets/icons/dex.png')} style={{ height: 25, width: 25 }} />;
            } else {
              return <Image source={require('../assets/icons/dex-inactive.png')} style={{ height: 25, width: 25 }} />;
            }
          }
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => <TabIcon size={25} name="settings-outline" color={color} />
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="tabs">
        <Group screenOptions={{ headerShown: false }}>
          {/* {Onboarding} */}
          <Screen name="tabs" component={Tabs} />

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
