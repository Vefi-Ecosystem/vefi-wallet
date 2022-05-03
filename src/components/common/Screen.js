import { Text, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

export default function Screen({ children, styles }) {
  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: Constants.statusBarHeight + 10,
          paddingHorizontal: 20
        },
        styles
      ]}
    >
      {children}
    </View>
  );
}
