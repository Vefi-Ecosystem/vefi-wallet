import { Image, View, Platform } from 'react-native';
import React from 'react';
import Screen from '../components/common/Screen';
import VText from '../components/common/VText';
import VButton from '../components/Button/Button';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
export default function EnableNotifications() {
  // const [expoPushToken, setExpoPushToken] = useState('');

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        // alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      // alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C'
      });
    }

    return token;
  }

  const getToken = () => {
    registerForPushNotificationsAsync().then((token) => {
      //setExpoPushToken(token);
      console.log('Token Is, ', token);
    });
  };
  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ marginVertical: 30 }}>
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
              height: 100,
              resizeMode: 'contain',
              marginVertical: 10
            }}
          />
        </View>
        <View style={{ marginVertical: 30 }}>
          <VButton label="Enable Notifications" onPress={getToken} />
          <VButton label="Cancel" textual />
        </View>
      </View>
    </Screen>
  );
}

// const styles = StyleSheet.create({});
