import { Text, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import BackButton from '../Button/BackButton';

export default function Screen({ children, styles, backButtonLabel, backButtonShown = false }) {
  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: Constants.statusBarHeight,
          paddingHorizontal: 20
        },
        styles
      ]}
    >
      {backButtonShown && <BackButton label={backButtonLabel} />}
      {children}
    </View>
  );
}
