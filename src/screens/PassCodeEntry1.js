 import React from 'react'
 import styled from 'styled-components/native';
 import Screen from '../components/common/Screen';
 import { MainSubContainer, TopContainer,BottomContainer } from '../components/common/CommonStyles';
import VButton from '../components/Button/Button';
import VText from '../components/common/VText';

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
color: #495057;
`;

 export default function PassCodeEntry1() {
   return (
     <Screen>
         <MainSubContainer>
             <TopContainer>
                 <StyledLockImage source={require("../../assets/images/Lock.png")}/>
                 <VText font="GilroySemiBold">Let's secure your account</VText>
                 <ProtectView>
                    <ProtectText>To help protect you from identity theft, we </ProtectText>
                    <ProtectText> need you to create a unique passcode.</ProtectText>
                 </ProtectView>
             </TopContainer>
             <BottomContainer>
                 <VButton label="Create passcode"  />
             </BottomContainer>
         </MainSubContainer>
     </Screen>
   )
 }
 