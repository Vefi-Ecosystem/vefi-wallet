import { View } from 'react-native';
import React from 'react';
import Screen from '../../components/common/Screen';
import VText from '../../components/common/VText';
import VButton from '../../components/Button/Button';

export default function WalletBackup() {
  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ marginVertical: 30 }}>
          <VText medium font="GilroySemiBold" centered>
            Backup Your Wallet
          </VText>
          <VText font="GilroyMedium" small centered>
            As you proceed you will see secret phrase that allows you recover your wallet.
          </VText>
        </View>

              <View style={{ marginVertical: 30 }}>
                  
                  
          <VButton label="Continue" />
        </View>
      </View>
    </Screen>
  );
}
