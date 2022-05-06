import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import React from 'react';
import VText from '../common/VText';
import * as colors from '../../constants/colors';
import VIcon from '../common/VIcon';
import { useTheme } from '../../contexts/theme';

const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: ${(props) => (props.lightMode ? 'black' : 'white')};
  height: 48px;
  border-radius: 8px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-vertical: 10px;
`;

export default function VButton({ label, transparent, icon, disabled, onPress, outlined, textual }) {
  const theme = useTheme();
  return (
    <StyledTouchableOpacity
      disabled={disabled}
      style={[disabled && styles.disabled, transparent && { backgroundColor: 'transparent' }]}
      onPress={onPress}
      lightMode={theme.mode == 'light' ? true : false}
    >
      {icon && (
        <VIcon name={icon} color={outlined ? colors.black : colors.white} style={{ marginRight: 11 }} size={25} />
      )}
      <VText
        white={!theme.mode === 'dark'}
        black={!theme.mode === 'light'}
        button
        font={textual ? 'GilroyMedium' : 'SfSemiBold'}
      >
        {label}
      </VText>
    </StyledTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 48,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  disabled: {
    backgroundColor: colors.lightGrey
  },
  outlined: {
    borderWidth: 1.5,
    borderColor: colors.black,
    backgroundColor: colors.white,
    height: 46.5
  },
  textual: {
    backgroundColor: colors.white,
    height: 48,
    marginVertical: 5
  }
});
