import styled from 'styled-components/native';
import React from 'react';
import Constants from 'expo-constants';
import BackButton from '../Button/BackButton';
import VText from './VText';
import { useTheme } from '../../contexts/theme';
import { View } from 'react-native';

const StyledView = styled.View`
  background-color: ${(props) => props.theme.appBg};
`;

export default function Screen({ children, styles, backButtonShown, backButtonLabel, backButtonOnPress, title }) {
  const theme = useTheme();
  return (
    <StyledView
      style={[
        {
          flex: 1,
          paddingTop: Constants.statusBarHeight,
          paddingHorizontal: 20
        },
        styles
      ]}
    >
      {backButtonShown && <BackButton label={backButtonLabel} />}
      {title && (
        <View
          style={{
            marginVertical: 10
          }}
        >
          <VText white={theme.mode === 'dark'} black={theme.mode === 'light'} font="PoppinsSemiBold" medium centered>
            {title}
          </VText>
        </View>
      )}
      {children}
    </StyledView>
  );
}
