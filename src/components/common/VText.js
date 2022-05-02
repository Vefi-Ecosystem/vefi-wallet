import { StyleSheet, Text } from 'react-native';
import React from 'react';
import * as colors from '../constants/colors';

export default function VText({
  children,
  title,
  centered,
  small,
  grey,
  primary,
  red,
  green,
  left,
  medium,
  white,
  bold,
  padded,
  ...props
}) {
  return (
    <Text
      style={[
        styles.text,
        centered && styles.centered,
        padded && styles.padded,
        title && styles.title,
        small && styles.small,
        grey && styles.grey,
        red && styles.red,
        green && styles.green,
        primary && styles.primary,
        medium && styles.medium,
        left && styles.left,
        white && styles.white,
        bold && styles.bold
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Sf',
    fontSize: 16
  },
  white: {
    color: colors.white
  },
  black: {
    color: colors.black
  }
});
