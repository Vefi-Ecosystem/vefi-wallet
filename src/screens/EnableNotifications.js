import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../components/common/Screen';
import VText from '../components/common/VText';
import VButton from '../components/Button/Button';

export default function EnableNotifications() {
  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ marginVertical: 25 }}>
          <VText medium font="GilroySemiBold" centered>
            Enable Notifications
          </VText>
          <VText font="Sf" small centered>
            Enable notifications so you don’t miss out on any important notification
          </VText>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/icons/notifications.png')}
            style={{
              //   width: '100%',
              height: 100,
              resizeMode: 'contain',
              marginVertical: 10
            }}
          />
        </View>
        <View style={{ marginVertical: 25 }}>
          <VButton label="Enable Notifications" />
          <VButton label="Cancel" textual />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
