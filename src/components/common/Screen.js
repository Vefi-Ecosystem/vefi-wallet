import styled from 'styled-components/native';
import React from 'react';
import Constants from 'expo-constants';

const StyledView = styled.View`
  background-color: ${(props) => props.theme.appBg};
`;

export default function Screen({ children, styles }) {
  return (
    <StyledView
      style={[
        {
          flex: 1,
          paddingTop: Constants.statusBarHeight + 10,
          paddingHorizontal: 20
        },
        styles
      ]}
    >
      {children}
    </StyledView>
  );
}
