import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../../components/common/Screen';
import VButton from '../../components/Button/Button';
import { useTheme } from '../../contexts/theme';
import SeedPhraseWrapper from '../../components/onboarding/SeedPhraseWrapper';

export default function SecretPhrase() {
  const theme = useTheme();
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
          <SeedPhraseWrapper />
        </View>
        <View style={{ marginVertical: 30 }}>
          <VButton textual={theme.mode === 'dark'} label="Continue" />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
