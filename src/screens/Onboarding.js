import { Image, View } from 'react-native';
import React from 'react';
import VText from '../components/common/VText';
import Screen from '../components/common/Screen';
import VButton from '../components/Button/Button';
import { useTheme } from '../contexts/theme';

export default function Onboarding() {
  const theme = useTheme();

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
          <VText white={theme.mode === 'dark'} black={theme.mode === 'light'} font="GilroySemiBold" title centered>
            One place for all
          </VText>
          <VText grey> Seamlessly trade and store all your assests</VText>
        </View>
        <View style={{ marginVertical: 30 }}>
          <VButton textual={theme.mode === 'dark'} label="Create new account" />
          <VButton textual={theme.mode === 'light'} transparent label="I already have an account" />
        </View>
      </View>
    </Screen>
  );
}

// const styles = StyleSheet.create({});
