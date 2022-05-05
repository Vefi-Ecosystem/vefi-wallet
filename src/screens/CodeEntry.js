import React, { useState } from 'react';
import styled from 'styled-components/native';
import Screen from '../components/common/Screen';
import { View } from 'react-native';
import { MainSubContainer, TopContainer, BottomContainer } from '../components/common/CommonStyles';
import VButton2 from '../components/Button/Button2';
import VText from '../components/common/VText';
import { useTheme } from '../contexts/theme';

const ProtectView = styled.View`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const ProtectText = styled.Text`
  font-family: Sf;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => (props.lightMode ? '#495057' : '#757575')};
`;

const CodeContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 144px;
  justify-content: space-around;
  margin-top: 34px;
`;

const DotInActive = styled.View`
  background: ${(props) => (props.lightMode ? '#070734' : '#424242')};
  ${(props) => (props.lightMode ? 'opacity: 0.1;' : '')}

  width: 12px;
  height: 12px;
  border-radius: 12px;
`;
const DotActive = styled.View`
  background: #4263eb;
  width: 12px;
  height: 12px;
  border-radius: 12px;
`;

const StyledInput = styled.TextInput`
  color: transparent;

  width: 144px;
  margin-top: -20px;
`;

export default function CodeEntry({ navigator }) {
  const theme = useTheme();

  const [passCode, setPassCode] = useState('');

  return (
    <Screen>
      <MainSubContainer>
        <TopContainer>
          <View style={{ marginTop: 70 }}>
            <VText font="GilroySemiBold" white={theme.mode === 'dark'} black={theme.mode === 'light'}>
              Create your safe passcode
            </VText>
          </View>

          <ProtectView>
            <ProtectText lightMode={theme.mode == 'light' ? true : false}>Passcode must apply 6 unique </ProtectText>
            <ProtectText lightMode={theme.mode == 'light' ? true : false}>numeric characters </ProtectText>
          </ProtectView>

          <CodeContainer>
            {passCode.split('').map((data, i) => (
              <DotActive key={i} />
            ))}

            {'000000'
              .substring(passCode.length)
              .split('')
              .map((data, i) => (
                <DotInActive lightMode={theme.mode == 'light' ? true : false} key={i} />
              ))}
          </CodeContainer>

          <StyledInput
            caretHidden={true}
            value={passCode}
            onChangeText={(inp) => {
              if (inp.length <= 6) {
                setPassCode(inp);
              }
            }}
            autoFocus={true}
            keyboardType="numeric"
          />
        </TopContainer>
        <BottomContainer>
          <VButton2 label="Continue" disabled={passCode.length != 6} />
        </BottomContainer>
      </MainSubContainer>
    </Screen>
  );
}
