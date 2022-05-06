import { TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { generateMnemonic } from '../../states/phrase';
import Screen from '../../components/common/Screen';
import VButton from '../../components/Button/Button';
import { useTheme } from '../../contexts/theme';
import SeedPhraseWrapper from '../../components/onboarding/SeedPhraseWrapper';
import VText from '../../components/common/VText';
import * as Clipboard from 'expo-clipboard';
import VIcon from '../../components/common/VIcon';

export default function SecretPhrase({ navigation }) {
  const theme = useTheme();
  const { phrase } = useSelector((state) => state.phraseReducer);
  const dispatch = useDispatch();

  const copyToClipboard = () => {
    Clipboard.setString(phrase);
  };

  useEffect(() => {
    dispatch(generateMnemonic(undefined));
  }, []);

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
          <SeedPhraseWrapper
            phrases={phrase ? _.split(phrase, ' ') : []}
            onPhrasePress={() => {}}
            removeSelectedPhrases={() => {}}
          />
          <TouchableOpacity onPress={copyToClipboard}>
            <VText blue centered font="Sf">
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
            <VText orange small centered font="Sf">
              Never share your recovery phrase with anyone, store it securely!
            </VText>
          </View>
          <VButton
            onPress={() => navigation.replace('verifySecretPhrase')}
            textual={theme.mode === 'dark'}
            label="Continue"
          />
        </View>
      </View>
    </Screen>
  );
}
