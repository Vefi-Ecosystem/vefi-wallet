import { View, Text, TouchableOpacity, Image } from 'react-native';
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
        marginVertical: 10
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View
          style={{
            marginRight: 15,
            height: 42,
            borderRadius: 25,
            width: 42,
            backgroundColor: item.color,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image source={item.icon} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
        </View>
        <VText grey>{item.title}</VText>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {item.label && <VText grey>{item.label}</VText>}
        <VIcon name="chevron-forward" />
      </View>
    </TouchableOpacity>
  );
}
