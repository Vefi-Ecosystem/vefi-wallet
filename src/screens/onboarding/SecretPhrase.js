import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Screen from '../../components/common/Screen';
import VButton from '../../components/Button/Button';
import { useTheme } from '../../contexts/theme';
import SeedPhraseWrapper from '../../components/onboarding/SeedPhraseWrapper';
import VText from '../../components/common/VText';
import * as Clipboard from 'expo-clipboard';
import VIcon from '../../components/common/VIcon';

export default function SecretPhrase() {
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
      title="Your Secret Phrase"
      description="Write down or copy these words in the order that they are shown and keep them safe."
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <View>
          <SeedPhraseWrapper phrases={phrases} />
          <TouchableOpacity onPress={copyToClipboard}>
            <VText blue centered>
              Copy
            </VText>
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 30 }}>
          <View
            style={{
              alignItems: 'center',
              marginVertical: 10
            }}
          >
            <VIcon name="alert-circle-outline" color="orange" />
            <VText orange small centered>
              Never share your recovery phrase with anyone, store it securely!
            </VText>
          </View>
          <VButton textual={theme.mode === 'dark'} label="Continue" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
