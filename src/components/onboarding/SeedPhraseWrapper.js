import { View, Text } from 'react-native';
import React from 'react';
import SeedPhrase from './SeedPhrase';

export default function SeedPhraseWrapper({ phrases, noIndex, onPhrasePress ,removeSelectedPhrases}) {
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
        <SeedPhrase key={index} phrase={phrase} index={!noIndex && index + 1} onPress={()=>{onPhrasePress(phrase);removeSelectedPhrases(phrase);}} />
      ))}
    </View>
  );
}
