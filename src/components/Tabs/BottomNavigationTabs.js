import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import * as colors from '../../constants/colors';
import { useTheme } from '../../contexts/theme';
import Settings from '../../screens/auth/settings/Settings';
import Legal1And2 from '../../screens/onboarding/Legal1And2';
import SecretPhrase from '../../screens/onboarding/SecretPhrase';
import VerifySecretPhrase from '../../screens/onboarding/VerifySecretPhrase';

import TabIcon from '../common/TabIcon';
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
            if (color == '#105DCF') {
              return <Image source={require('../../../assets/icons/dex.png')} style={{ height: 25, width: 25 }} />;
            } else {
              return (
                <Image source={require('../../../assets/icons/dex-inactive.png')} style={{ height: 25, width: 25 }} />
              );
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

export default Tabs;
