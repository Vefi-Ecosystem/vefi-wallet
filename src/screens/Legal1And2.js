import React,{useState} from 'react'
import styled from 'styled-components/native';
import Screen from '../components/common/Screen';
import { View,Text,TouchableOpacity} from 'react-native';
import Checkbox from 'expo-checkbox';
import VButton from '../components/Button/Button';
import VText from '../components/common/VText';
import VIcon from '../components/common/VIcon';
import { MainSubContainer, TopContainer,BottomContainer } from '../components/common/CommonStyles';






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
color: #495057;
font-weight: 400;
font-size: 14px;
line-height: 22px;
font-family: 'GilroyMedium';
`;

const TermsText = styled.Text`
color: #495057;
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
    background: rgba(246, 245, 245, 0.85);

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


function Legal1And2() {

 const [isChecked, setChecked] = useState(false);

  return (

    <Screen>
       <MainSubContainer>
            <TopContainer>
            <Title>
                <TouchableOpacity>
                <View style={{display: 'flex',flexDirection:'row',width: 75,justifyContent:"flex-start",alignItems:"center"}}>
                    <VIcon
                        name="chevron-back"
                      
                    />
                      <Text style={{
                          color: '#200E32',
                          fontSize: 16,
                          fontFamily:"GilroySemiBold",
                          lineHeight: 22,
                          fontWeight: "400"
                        
                      }}>Back</Text>
                </View>
                </TouchableOpacity>
                <View style={{width: 75}}>
                <Text style={{
                          color: '#000000',
                          fontSize: 20,
                          fontFamily:"GilroySemiBold",
                          lineHeight: 22,
                          fontWeight: "600"
                      }}>Legal</Text>
                </View>
                <View style={{width: 60}}>

                </View>


              
            </Title>
            <ReviewAndPolicyView>
                    <ReviewText>Kindly review the Vefi Terms of Services and Privacy Policy </ReviewText>
            </ReviewAndPolicyView>

            <PolicyView>
                    <TouchableOpacity>
                    <PolicySub>
                        <VText font="GilroyMedium">Privacy Policy</VText>
                        
                        <VIcon name="chevron-forward"  size={18}
                        />
                    </PolicySub>
                    </TouchableOpacity>

                    <View
                        style={{
                            borderBottomColor: '#D2D1D1',
                            borderBottomWidth: 1,
                            marginTop: 14,
                            marginLeft: 10
                        }}
                        />

                    <TouchableOpacity>
                     <PolicySub>
                       <VText font="GilroyMedium" >Terms of Service</VText>
                        
                       <VIcon name="chevron-forward" size={18}
                        />
                    </PolicySub>
                    </TouchableOpacity>
            </PolicyView>
            
            </TopContainer>


            <BottomContainer>
                <CheckboxContainer>
                    <Checkbox
                    style={{borderColor:'#DDE2E5',height: 28 ,width: 28}}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                    />

                    <TermsText>
                    I’ve read and accepted the Terms of Service and Privacy Policy.
                    </TermsText>

                </CheckboxContainer>

                <VButton label="Continue" disabled={!isChecked} />
             
            </BottomContainer>
       </MainSubContainer>
    </Screen>
  )
}

export default Legal1And2