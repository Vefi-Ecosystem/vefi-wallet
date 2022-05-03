import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import VText from '../common/VText';
import * as colors from '../../constants/colors';
import VIcon from '../common/VIcon';

export default function VButton({ label, icon, style, disabled, onPress }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, disabled && styles.disabled, style]}
      onPress={onPress}
    >
      {icon && <VIcon name={icon} color={colors.white} style={{ marginRight: 15 }} />}
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
