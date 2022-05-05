import React, { useState } from 'react';
import styled from 'styled-components/native';
import Screen from '../components/common/Screen';
import { View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import VText from '../components/common/VText';
import VIcon from '../components/common/VIcon';
import { MainSubContainer, TopContainer, BottomContainer } from '../components/common/CommonStyles';
import { useTheme } from '../contexts/theme';
import VButton2 from '../components/Button/Button2';

const Title = styled.View`
  width: 100%;
  height: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ReviewAndPolicyView = styled.View`
  width: 100%;

  margin-top: 30px;
`;

const ReviewText = styled.Text`
  color: ${(props) => (props.lightMode ? '#495057' : '#FAFAFA')};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  font-family: 'GilroyMedium';
`;

const TermsText = styled.Text`
  color: ${(props) => (props.lightMode ? '#495057' : '#FAFAFA')};
  font-weight: 400;
  font-size: 14px;
  margin-right: 20px;
  line-height: 17px;
  font-family: 'GilroyMedium';
  margin-left: 10px;
`;

const PolicyView = styled.View`
  width: 100%;
  height: 97px;
  background: ${(props) => (props.lightMode ? 'rgba(246, 245, 245, 0.85)' : '#212121')};

  border-radius: 8px;
  margin-top: 17px;
  display: flex;
  flex-direction: column;
`;

const PolicySub = styled.View`
  margin-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RightArrow = styled.Image`
  height: 15px;
  width: 10px;
  margin-right: 5px;
`;

const CheckboxContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  padding-right: 20px;
`;

function Legal1And2({ navigation }) {
  const theme = useTheme();
  const [isChecked, setChecked] = useState(false);

  return (
    <Screen>
      <MainSubContainer>
        <TopContainer>
          <Title>
            <TouchableOpacity onPress={() => navigation.navigate('onboarding')}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: 75,
                  justifyContent: 'flex-start',
                  alignItems: 'center'
                }}
              >
                <VIcon name="chevron-back" color={theme.mode == 'light' ? 'black' : 'white'} />
                <Text
                  style={{
                    color: theme.mode == 'light' ? '#200E32' : '#EEEEEE',
                    fontSize: 16,
                    fontFamily: 'GilroySemiBold',
                    lineHeight: 22,
                    fontWeight: '400'
                  }}
                >
                  Back
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ width: 75 }}>
              <Text
                style={{
                  color: theme.mode == 'light' ? 'black' : 'white',

                  fontSize: 20,
                  fontFamily: 'GilroySemiBold',
                  lineHeight: 22,
                  fontWeight: '600'
                }}
              >
                Legal
              </Text>
            </View>
            <View style={{ width: 60 }}></View>
          </Title>
          <ReviewAndPolicyView>
            <ReviewText lightMode={theme.mode == 'light' ? true : false}>
              Kindly review the Vefi Terms of Services and Privacy Policy{' '}
            </ReviewText>
          </ReviewAndPolicyView>

          <PolicyView lightMode={theme.mode == 'light' ? true : false}>
            <TouchableOpacity>
              <PolicySub>
                <VText font="GilroyMedium" white={theme.mode === 'dark'} black={theme.mode === 'light'}>
                  Privacy Policy
                </VText>

                <VIcon name="chevron-forward" color={theme.mode == 'light' ? 'black' : 'white'} size={18} />
              </PolicySub>
            </TouchableOpacity>

            <View
              style={{
                borderBottomColor: theme.mode == 'light' ? '#D2D1D1' : '#2D2D2D',
                borderBottomWidth: 1,
                marginTop: 14,
                marginLeft: 10
              }}
            />

            <TouchableOpacity>
              <PolicySub>
                <VText font="GilroyMedium" white={theme.mode === 'dark'} black={theme.mode === 'light'}>
                  Terms of Service
                </VText>

                <VIcon name="chevron-forward" color={theme.mode == 'light' ? 'black' : 'white'} size={18} />
              </PolicySub>
            </TouchableOpacity>
          </PolicyView>
        </TopContainer>

        <BottomContainer>
          <CheckboxContainer>
            <Checkbox
              style={{ borderColor: '#DDE2E5', height: 28, width: 28 }}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#4630EB' : undefined}
            />

            <TermsText lightMode={theme.mode == 'light' ? true : false}>
              I’ve read and accepted the Terms of Service and Privacy Policy.
            </TermsText>
          </CheckboxContainer>

          <VButton2
            onPress={() => {
              navigation.navigate('passCodeEntry1');
            }}
            label="Continue"
            disabled={!isChecked}
          />
        </BottomContainer>
      </MainSubContainer>
    </Screen>
  );
}

export default Legal1And2;
