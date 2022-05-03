import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import VIcon from '../common/VIcon';
import VText from '../common/VText';

export default function BackButton({ label, onPress }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
      onPress={onPress}
    >
      <VIcon name="chevron-back" size={25} />
      <VText font="GilroySemiBold">{label ?? 'Back'}</VText>
    </TouchableOpacity>
  );
}
