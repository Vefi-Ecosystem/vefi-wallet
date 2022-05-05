import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import * as colors from '../../constants/colors';

const StyledText = styled.Text`
  color: ${(props) => props.theme.buttonText};
`;

export default function VText({
  children,
  title,
  centered,
  small,
  grey,
  primary,
  deepBlue,
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
  style,
  ...props
}) {
  return (
    <StyledText
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
        deepBlue && styles.deepBlue,
        bold && styles.bold,
        {
          fontFamily: font ? font : 'GilroyMedium'
        },
        style
      ]}
      {...props}
    >
      {children}
    </StyledText>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Sf',
    fontSize: 16,
    margin: 1
  },
  white: {
    color: colors.white
  },
  black: {
    color: colors.black
  },
  grey: {
    color: colors.darkgrey
  },
  deepBlue: {
    color: colors.deepBlue
  },
  button: {
    fontFamily: 'SfSemiBold',
    fontSize: 16
  },
  medium: {
    fontSize: 20,
    marginVertical: 5
  },
  small: {
    fontSize: 14
  },
  title: {
    fontSize: 28,
    marginVertical: 10
  },
  centered: {
    textAlign: 'center'
  }
});
