import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { useTheme } from '../../contexts/theme';

const StyledView = styled.View`
  background: ${props=>props.lightMode?"#f7f5f5":"#212121"};
  ${props=>props.lightMode?" border: 1px solid #dde2e5;":""}
 
  border-radius: 8px;
  width: 100%;
  height: 48px;
`;

const StyledInput = styled.TextInput`
  color: ${props=>props.lightMode?"#101010":"#FAFAFA"};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-left: 21px;
  height: 48px;
`;

export const TextInput = ({ onChangeText, value }) => {

  const theme = useTheme(); 


  return (
    <StyledView lightMode={theme.mode=='light'?true:false}>
      <StyledInput lightMode={theme.mode=='light'?true:false} onChangeText={onChangeText} value={value} selectionColor={theme.mode=='light'?'black':'white'} />
    </StyledView>
  );
};

TextInput.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string
};
