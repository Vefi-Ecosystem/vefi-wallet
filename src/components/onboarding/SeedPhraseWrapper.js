import { View, Text } from 'react-native';
import React from 'react';
import SeedPhrase from './SeedPhrase';

export default function SeedPhraseWrapper() {
  const phrases = [
    'cave',
    'stomach',
    'dog',
    'apple',
    'twister',
    'absent',
    'kingsley',
    'bald',
    'tourette',
    'father',
    'terror',
    'lighthouse'
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 20
      }}
    >
      {phrases.map((phrase, index) => (
        <SeedPhrase phrase={phrase} index={index + 1} />
      ))}
    </View>
  );
}
