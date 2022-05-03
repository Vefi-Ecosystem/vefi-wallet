import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import VText from '../common/VText';
import * as colors from '../../constants/colors';
import VIcon from '../common/VIcon';

export default function VButton({ label, icon, style, disabled, onPress, outlined }) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, disabled && styles.disabled, outlined && styles.outlined, style]}
      onPress={onPress}
    >
      {icon && (
        <VIcon name={icon} color={outlined ? colors.black : colors.white} style={{ marginRight: 11 }} size={25} />
      )}
      <VText white={!outlined} button>
        {label}
      </VText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 48,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  disabled: {
    backgroundColor: colors.lightGrey
  },
  outlined: {
    borderWidth: 1.5,
    borderColor: colors.black,
    backgroundColor: colors.white
  }
});
