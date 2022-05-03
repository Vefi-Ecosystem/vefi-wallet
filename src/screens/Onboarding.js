import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import VText from '../components/common/VText';
import Screen from '../components/common/Screen';
import VButton from '../components/Button/Button';

export default function Onboarding() {
  return (
    <Screen>
      <View>
        <View>
          <VButton label="Create new account" />
          <VButton label="I already have an account" textual />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
