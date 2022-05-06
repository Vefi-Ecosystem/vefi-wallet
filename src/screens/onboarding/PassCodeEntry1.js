 import React from 'react'
 import styled from 'styled-components/native';
 import Screen from '../../components/common/Screen';
 import { MainSubContainer, TopContainer,BottomContainer } from '../..//components/common/CommonStyles';
import VButton2 from '../../components/Button/Button2';
import VText from '../../components/common/VText';
import { useTheme } from '../../contexts/theme';

const StyledLockImage = styled.Image`
  width: 154px;
  height: 144.52px;
  margin-top: 70px;
  margin-bottom: 40px;
`;

const ProtectView = styled.View`
  margin-top: 20px;
`;

const ProtectText = styled.Text`
  font-family: Sf;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => (props.lightMode ? '#495057' : '#757575')};
`;

export default function PassCodeEntry1({ navigation }) {
  const theme = useTheme();

  return (
    <Screen>
      <MainSubContainer>
        <TopContainer>
          <StyledLockImage
            source={
              theme.mode == 'light'
                ? require('../../../assets/images/Lock.png')
                : require('../../../assets/images/LockDark.png')
            }
          />

          <VText font="GilroySemiBold" white={theme.mode === 'dark'} black={theme.mode === 'light'}>
            Let's secure your account
          </VText>
          <ProtectView>
            <ProtectText lightMode={theme.mode == 'light' ? true : false}>
              To help protect you from identity theft, we{' '}
            </ProtectText>
            <ProtectText lightMode={theme.mode == 'light' ? true : false}>
              {' '}
              need you to create a unique passcode.
            </ProtectText>
          </ProtectView>
        </TopContainer>
        <BottomContainer>
          <VButton2
            label="Create passcode"
            onPress={() => {
              navigation.navigate('codeEntry');
            }}
          />
        </BottomContainer>
      </MainSubContainer>
    </Screen>
  );
}
