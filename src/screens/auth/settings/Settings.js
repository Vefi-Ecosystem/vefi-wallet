import { View, Text } from 'react-native';
import React from 'react';
import Screen from '../../../components/common/Screen';
import VText from '../../../components/common/VText';
import { useTheme } from '../../../contexts/theme';

export default function Settings() {
  const theme = useTheme();
  return (
    <Screen>
      <VText white={theme.mode === 'dark'} black={theme.mode === 'light'} centered medium font="GilroySemiBold">
        Settings
      </VText>
    </Screen>
  );
}
