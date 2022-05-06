import styled from 'styled-components/native'
import React from 'react';
import { TouchableOpacity,ImageBackground} from 'react-native';

const StyledText = styled.Text`
font-family: 'GilroyMedium';
font-weight: 400;
font-size: 10.4545px;
line-height: 12px;
color: #FFFFFF;
margin-top: 20px;
margin-left: 20px;

`;

const StyledBalance = styled.Text`
font-family: 'Sf';
font-style: normal;
font-weight: 700;
font-size: 27.1818px;
line-height: 32px;
color: #FFFFFF;
margin-top: 15px;
margin-left: 20px;

`;

const YourEqBal = styled.Text`

font-family: 'Sf';
font-style: normal;
font-weight: 400;
font-size: 12.5455px;
line-height: 15px;
color: rgba(255, 255, 255, 0.7);
margin-top: 5px;
margin-left: 20px;

`;

const ButtonContainerView = styled.View`
display: flex;
flex-direction: row;
width: 175px;
justify-content: space-between;
margin-top: 40px;
margin-left: 20px;
`;


const StyledSendView = styled.View`
background: rgba(255, 255, 255, 0.2);
box-shadow: 0px 4.18182px 4.18182px rgba(143, 77, 223, 0.5);

border-radius: 9.80564px;
width: 71px;
height: 30px;

display: flex;
align-items: center;
justify-content: center;

`;

const StyledRecieveView = styled.View`
background: rgba(255, 255, 255, 0.2);
box-shadow: 0px 4.18182px 4.18182px rgba(143, 77, 223, 0.3);
border-radius: 9.75758px;
width: 83px;
height: 30px;

display: flex;
align-items: center;
justify-content: center;



`;

const StyledBtnText = styled.Text`
font-family: 'Sf';
font-style: normal;
font-weight: 500;
font-size: 14.6364px;
line-height: 17px;
text-align: center;
color: #FFFFFF;
`;

const ColoredCard =styled.View`
    width: 318.86px;
    height: 184px;


    border-radius: 29.2727px;
    

`;

export default function GradientCard() {
  return (
    // <LinearGradient
    //     style={{width: 318.86,height: 184,borderRadius: 29.2727}}
    //     colors = {['#B56FFF','#79E1F9']}
    //     start={[0,1]}
    //     end={[1,0]}

    //     locations={[0.04, 1.36]}
        
    
    // >
        <ColoredCard>
           <ImageBackground style={{width:"100%",height:"100%",borderRadius: 29}} resizeMode='cover'  imageStyle={{ borderRadius: 29.2727}} source={require("../../../assets/gradient.png")}>   
                <StyledText

                    >
                            MULTI WALLET-1
                </StyledText>

                <StyledBalance>$49,329.77</StyledBalance>

                <YourEqBal>Your equivalent balance</YourEqBal>

                <ButtonContainerView>
                    <TouchableOpacity><StyledSendView><StyledBtnText>Send</StyledBtnText></StyledSendView></TouchableOpacity>
                    <TouchableOpacity><StyledRecieveView><StyledBtnText>Recieve</StyledBtnText></StyledRecieveView></TouchableOpacity>
                </ButtonContainerView>
           </ImageBackground> 
   

        </ColoredCard>

    // </LinearGradient>
  )
}
