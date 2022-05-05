import { View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import VText from '../common/VText';
import { useTheme } from '../../contexts/theme';
const width = Dimensions.get('screen').width / 4.2;

export default function SeedPhrase({ phrase, index, onPress }) {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#8D9DA9',
        paddingVertical: 5,
        paddingHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        // width: width,
        flexDirection: 'row'
      }}
    >
      {index && (
        <VText grey small>
          {index}
        </VText>
      )}
      <VText white={theme.mode === 'dark'} deepBlue={theme.mode === 'light'} small>
        {phrase}
      </VText>
    </TouchableOpacity>
  );
}
