import { StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as colors from '../../constants/colors';
import { useTheme } from '../../contexts/theme';

export default function VIcon({ name, size, style, color }) {
  const theme = useTheme();
  return (
    <Ionicons
      name={name}
      color={color ? colors[color] : theme.mode === 'dark' ? colors.lightGrey : colors.darkgrey}
      size={size ?? 25}
      style={[styles.icons, style]}
    />
  );
}

const styles = StyleSheet.create({
  icons: {
    // margin: 5
  }
});
