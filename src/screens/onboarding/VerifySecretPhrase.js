import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Screen from '../../components/common/Screen';
import VButton from '../../components/Button/Button';
import { useTheme } from '../../contexts/theme';
import SeedPhraseWrapper from '../../components/onboarding/SeedPhraseWrapper';
import VText from '../../components/common/VText';
import * as Clipboard from 'expo-clipboard';
import VIcon from '../../components/common/VIcon';

export default function VerifySecretPhrase() {
  const [copiedText, setCopiedText] = React.useState('');
  const theme = useTheme();
  const copyToClipboard = () => {
    Clipboard.setString(phrases.toString());
  };
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
    <Screen
      backButtonShown
      title="Verify Secret Phrase"
      description="Tap on the words to align them next to each other in the right order."
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: '#ACB5BD990',
            marginHorizontal: -20,
            marginTop: 35
          }}
        ></View>
        <View style={{ flex: 1 }}>
          <SeedPhraseWrapper phrases={phrases} noIndex />
        </View>
        <View style={{ marginVertical: 30, flex: 1, justifyContent: 'flex-end' }}>
          <VButton textual={theme.mode === 'dark'} label="Continue" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});