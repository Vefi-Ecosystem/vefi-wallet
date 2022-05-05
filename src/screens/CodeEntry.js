import React,{useState} from 'react'
import styled from 'styled-components/native';
import Screen from '../components/common/Screen';
import { View} from 'react-native';
import { MainSubContainer, TopContainer,BottomContainer } from '../components/common/CommonStyles';
import VButton from '../components/Button/Button';
import VText from '../components/common/VText';



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
color: #495057;
`;

const CodeContainer = styled.View`
display: flex;
flex-direction: row;
width: 144px;
justify-content: space-around;
margin-top: 34px;

`;

const DotInActive = styled.View`
background: #070734;
opacity: 0.1;
width: 12px;
height: 12px;
border-radius: 12px;

`;
const DotActive = styled.View`
background: #4263EB;
width: 12px;
height: 12px;
border-radius: 12px;

`;

const StyledInput = styled.TextInput`
    color: transparent;

    width: 144px;
    margin-top: -20px;

`;

export default function CodeEntry() {

  const [passCode,setPassCode] = useState("");  

  return (
    <Screen>
        <MainSubContainer>
            <TopContainer>
                <View style ={{marginTop:70}}>
                    <VText font="GilroySemiBold">Create your safe passcode</VText>
                </View>
                
                <ProtectView>
                   <ProtectText>Passcode must apply 6 unique </ProtectText>
                   <ProtectText>numeric characters </ProtectText>
                </ProtectView>

                <CodeContainer>
                    {passCode.split("").map((data,i)=>(
                        <DotActive key={i}/>
                    )
                      
                    )}

                    {"000000".substring(passCode.length).split("").map((data,i)=>(
                        <DotInActive key={i}/>
                    ))}
                </CodeContainer>

                <StyledInput caretHidden={true} value={passCode} onChangeText={(inp)=>{if(inp.length<=6){setPassCode(inp)}}} autoFocus={true} keyboardType='numeric' />
            </TopContainer>
            <BottomContainer>
                <VButton label="Continue" disabled={passCode.length!=6} />
            </BottomContainer>
        </MainSubContainer>
    </Screen>
  )
}
