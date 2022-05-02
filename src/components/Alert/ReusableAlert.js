import React from 'react';
import PropTypes from 'prop-types';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import styled from 'styled-components/native';
import VIcon from '../common/VIcon';
import colors from '../../constants/colors';
import Button from '../Button/Button';

const StyledView = styled.View`
  background: ${(props) => (props.successView ? colors.success : colors.failure)};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 50px;
`;

const Alert = ({ children, isVisible, alertType, close }) => {
  return (
    <FancyAlert
      visible={isVisible}
      icon={
        <StyledView successView={alertType === 'success'}>
          <VIcon name={alertType === 'success' ? 'checkmark-done' : 'close-sharp'} color={colors.white} />
        </StyledView>
      }
    >
      {children}
      <Button label="close" onPress={close} />
    </FancyAlert>
  );
};

Alert.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  alertType: PropTypes.oneOf(['success', 'failure']).isRequired,
  close: PropTypes.func,
  children: PropTypes.any
};

export default Alert;
