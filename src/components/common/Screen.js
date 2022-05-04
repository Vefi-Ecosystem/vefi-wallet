import styled from 'styled-components/native';
import React from 'react';
import Constants from 'expo-constants';
import BackButton from '../Button/BackButton';

const StyledView = styled.View`
  background-color: ${(props) => props.theme.appBg};
`;

export default function Screen({ children, styles, backButtonShown, backButtonLabel, backButtonOnPress }) {
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
      {children}
    </StyledView>
  );
}
