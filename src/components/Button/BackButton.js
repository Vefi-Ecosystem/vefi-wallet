import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import VIcon from '../common/VIcon';
import VText from '../common/VText';
import { useTheme } from '../../contexts/theme';

export default function BackButton({ label, onPress }) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
      onPress={onPress}
    >
      <VIcon name="chevron-back" size={25} />
      <VText font="GilroySemiBold" white={theme.mode === 'dark'} black={theme.mode === 'light'}>
        {label ?? 'Back'}
      </VText>
    </TouchableOpacity>
  );
}
