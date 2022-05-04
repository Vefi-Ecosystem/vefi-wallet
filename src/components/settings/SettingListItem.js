import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '../../contexts/theme';
import VText from '../common/VText';
import VIcon from '../common/VIcon';
// import * as colors from

export default function SettingListItem({ onPress, item }) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        marginVertical: 15
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            marginRight: 15,
            height: 40,
            borderRadius: 20,
            width: 40,
            backgroundColor: item.color
          }}
        ></View>
        <VText grey>{item.title}</VText>
      </View>
      <View>
        <VIcon name="chevron-forward" />
      </View>
    </TouchableOpacity>
  );
}
