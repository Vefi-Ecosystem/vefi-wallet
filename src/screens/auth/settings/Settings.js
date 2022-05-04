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
      icon: 'wallet',
      link: 'wallets',
      color: '#FDF0E7',
      label: 'Main Wallet'
    },
    {
      title: 'Security',
      icon: 'security',
      link: 'security',
      color: '#E6E6E6'
    },
    {
      title: 'Push Notifications',
      icon: 'notifications',
      link: 'notifications',
      color: '#FEE7F5'
    },
    {
      title: 'Preferences',
      icon: 'preferences',
      link: 'preferences',
      color: '#4CC99030'
    },
    {
      title: 'Price Alerts',
      icon: 'price-alerts',
      link: 'priceAlerts',
      color: '#FBE8ED'
    },
    {
      title: 'Wallet Connect',
      icon: 'wallet-connect',
      link: 'walletConnect',
      color: '#E5EFFD'
    },
    {
      title: 'Help & Support',
      icon: 'help-support',
      link: 'helpSupport',
      color: '#F03D3E4D'
    }
  ];
  return (
    <Screen>
      <VText white={theme.mode === 'dark'} black={theme.mode === 'light'} centered medium font="GilroySemiBold">
        Settings
      </VText>

      <FlatList
        data={settings}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SettingListItem item={item} />}
      />
    </Screen>
  );
}
