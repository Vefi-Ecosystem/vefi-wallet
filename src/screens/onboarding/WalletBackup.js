import { View } from 'react-native';
import React, { useState } from 'react';
import Screen from '../../components/common/Screen';
import VText from '../../components/common/VText';
import VButton from '../../components/Button/Button';
import VRadio from '../../components/Input/VRadio';

export default function WalletBackup() {
  const [radioOneChecked, setRadioOneChecked] = useState(false);
  const [radioTwoChecked, setRadioTwoChecked] = useState(false);
  const [radioThreeChecked, setRadioThreeChecked] = useState(false);
  return (
    <Screen backButtonShown backButtonLabel="Legal">
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ marginVertical: 30 }}>
          <VText medium font="GilroySemiBold" centered>
            Backup Your Wallet
          </VText>
          <VText font="GilroyMedium" small centered grey>
            As you proceed you will see secret phrase that allows you recover your wallet.
          </VText>
        </View>

        <View style={{ marginVertical: 30 }}>
          <VRadio
            checked={radioOneChecked}
            onPress={() => {
              setRadioOneChecked(!radioOneChecked);
            }}
          />

          <VRadio
            checked={radioTwoChecked}
            onPress={() => {
              setRadioTwoChecked(!radioTwoChecked);
            }}
          />
          <VRadio
            checked={radioThreeChecked}
            onPress={() => {
              setRadioThreeChecked(!radioThreeChecked);
            }}
          />

          <VButton label="Continue" />
        </View>
      </View>
    </Screen>
  );
}
