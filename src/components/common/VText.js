import { StyleSheet, Text } from 'react-native';
import React from 'react';
import * as colors from '../../constants/colors';

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
  black,
  bold,
  padded,
  button,
  font,
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
        button && styles.button,
        left && styles.left,
        white && styles.white,
        black && styles.black,
        bold && styles.bold,
        {
          fontFamily: font ? font : 'GilroyMedium',
        }
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
  },
  button: {
    fontFamily: 'SfSemiBold',
    fontSize: 16
  }
});
