import { View, Text } from 'react-native';
import React from 'react';
import SeedPhrase from './SeedPhrase';

export default function SeedPhraseWrapper({ phrases }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 40
      }}
    >
      {phrases.map((phrase, index) => (
        <SeedPhrase phrase={phrase} index={index + 1} />
      ))}
    </View>
  );
}
