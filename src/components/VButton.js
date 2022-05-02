import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import VText from './VText';
import colors from '../constants/colors';

export default function VButton({ label, icon, outlined, style, disabled, onPress }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, disabled && styles.disabled, style]}
      onPress={onPress}
    >
      <VText white>{label}</VText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  disabled: {
    backgroundColor: colors.lightGrey
  }
});
