import { View, TouchableOpacity, ColorPropType } from 'react-native';
import React from 'react';
import VText from '../common/VText';
import * as colors from '../../constants/colors';

export default function VRadio({ checked, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        borderWidth: 1,
        marginVertical: 10,
        padding: 10
      }}
    >
      <View style={{ width: '70%' }}>
        <VText font="Sf" small>
          It is my full responsibility to keep my secret phrase secure.
        </VText>
      </View>
      <View
        style={[
          {
            marginRight: 20,
            width: 25,
            height: 25,
            borderRadius: 12.5,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2,
            borderColor: checked ? colors.blue : colors.inputBorder,
            padding: 2
          }
        ]}
      >
        {checked && (
          <View
            style={{
              width: 16,
              height: 16,
              borderRadius: 8,
              backgroundColor: colors.blue
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
