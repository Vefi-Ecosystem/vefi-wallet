import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import VText from '../components/common/VText';
import Screen from '../components/common/Screen';
import VButton from '../components/Button/Button';

export default function Onboarding() {
  return (
    <Screen>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            source={require('../../assets/images/onboarding.png')}
            style={{
              width: '100%',
              height: 250,
              resizeMode: 'contain',
              marginVertical: 10
            }}
          />
          <VText font="GilroySemiBold" title centered>
            One place for all
          </VText>
          <VText grey> Seamlessly trade and store all your assests</VText>
        </View>
        <View style={{ marginVertical: 25 }}>
          <VButton label="Create new account" />
          <VButton label="I already have an account" textual />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
