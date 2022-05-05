import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Screen from '../../components/common/Screen';
import VButton from '../../components/Button/Button';
import { useTheme } from '../../contexts/theme';
import SeedPhraseWrapper from '../../components/onboarding/SeedPhraseWrapper';
import { useSelector } from 'react-redux';
import _ from 'lodash';

export default function VerifySecretPhrase() {
  const theme = useTheme();
  const [unshuffled, setUnshuffled] = useState([]);
  const [shuffled, setShuffled] = useState([]);
  const [pickedKeys, setPickedKeys] = useState([]);
  const [targetIndex, setTargetIndex] = useState(0);
  const { phrase } = useSelector((state) => state.phraseReducer);

  const addKeyToPickedList = (index) => setPickedKeys((keys) => [...keys, index]);

  useEffect(() => {
    if (!!phrase || phrase !== null) setUnshuffled(_.split(phrase, ' '));
  }, [phrase]);

  useEffect(() => {
    if (unshuffled.length > 0)
      setShuffled(
        _.map(unshuffled, (value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
      );
  }, [unshuffled]);

  useEffect(() => {
    return () => setPickedKeys([]);
  }, []);

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
            backgroundColor: '#ACB5BD80',
            marginHorizontal: -20,
            marginTop: 35,
            paddingVertical: 4
          }}
        >
          <SeedPhraseWrapper
            phrases={_.map(pickedKeys, (key) => unshuffled[key])}
            onPhrasePress={() => {}}
            removeSelectedPhrases={() => {}}
          />
        </View>
        <View style={{ flex: 1 }}>
          <SeedPhraseWrapper
            phrases={shuffled}
            noIndex
            onPhrasePress={(phrase) => {
              if (unshuffled[targetIndex] === phrase) {
                addKeyToPickedList(targetIndex);
                setShuffled(shuffled.filter((val, index) => index !== shuffled.findIndex((item) => item === phrase)));
                if (targetIndex < unshuffled.length - 1) {
                  setTargetIndex(targetIndex + 1);
                }
              } else {
                console.log('Wrong!');
              }
            }}
            removeSelectedPhrases={() => {}}
          />
        </View>
        <View style={{ marginVertical: 30, flex: 1, justifyContent: 'flex-end' }}>
          <VButton textual={theme.mode === 'dark'} label="Continue" disabled={pickedKeys.length != 12} />
        </View>
      </View>
    </Screen>
  );
}

// const styles = StyleSheet.create({});
