import { View, Text, FlatList } from 'react-native';
import React from 'react';
import Screen from '../../../components/common/Screen';
import VText from '../../../components/common/VText';
import { useTheme } from '../../../contexts/theme';
import SettingListItem from '../../../components/settings/SettingListItem';

export default function Settings() {
  const theme = useTheme();

  const settings = [
    {
      title: 'Wallets',
      icon: require('../../../../assets/icons/settings/wallets.png'),
      link: 'wallets',
      color: '#FDF0E7',
      label: 'Main Wallet'
    },
    {
      title: 'Security',
      icon: require('../../../../assets/icons/settings/security.png'),
      link: 'security',
      color: '#E6E6E6'
    },
    {
      title: 'Push Notifications',
      icon: require('../../../../assets/icons/settings/notifications.png'),
      link: 'notifications',
      color: '#FEE7F5'
    },
    {
      title: 'Preferences',
      icon: require('../../../../assets/icons/settings/preferences.png'),
      link: 'preferences',
      color: '#4CC99030'
    },
    {
      title: 'Price Alerts',
      icon: require('../../../../assets/icons/settings/price-alerts.png'),
      link: 'priceAlerts',
      color: '#FBE8ED'
    },
    {
      title: 'Wallet Connect',
      icon: require('../../../../assets/icons/settings/wallet-connect.png'),
      link: 'walletConnect',
      color: '#E5EFFD'
    },
    {
      title: 'Help & Support',
      icon: require('../../../../assets/icons/settings/help-support.png'),
      link: 'helpSupport',
      color: '#F03D3E30'
    }
  ];
  return (
    <Screen>
      <FlatList
        ListHeaderComponent={
          <VText white={theme.mode === 'dark'} black={theme.mode === 'light'} centered medium font="GilroySemiBold">
            Settings
          </VText>
        }
        data={settings}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SettingListItem item={item} />}
        ListFooterComponent={
          <View style={{ marginVertical: 10 }}>
            <VText grey> JOIN COMMUNITY</VText>
            <SettingListItem
              item={{
                title: 'Facebook',
                color: '#3B5998E6',
                icon: require('../../../../assets/icons/settings/facebook.png'),
                link: 'facebook'
              }}
            />
            <SettingListItem
              item={{
                title: 'Instagram',
                color: '#C13584E6',
                icon: require('../../../../assets/icons/settings/instagram.png')
              }}
            />
          </View>
        }
      />
    </Screen>
  );
}
