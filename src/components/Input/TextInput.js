import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const StyledView = styled.View`
  background: #f7f5f5;
  border: 1px solid #dde2e5;
  border-radius: 8px;
  width: 315px;
  height: 48px;
`;

const StyledInput = styled.TextInput`
  color: #101010;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-left: 21px;
  height: 48px;
`;

const TextInput = ({ onChangeText, value }) => {
  return (
    <StyledView>
      <StyledInput onChangeText={onChangeText} value={value} selectionColor={'black'} />
    </StyledView>
  );
};

TextInput.propTypes = {
  onChangeText: PropTypes.func,
  value: PropTypes.string
};
