import React,{useState} from 'react'
import styled from 'styled-components/native';
import Screen from '../../components/common/Screen';
import { View,Text,TouchableOpacity} from 'react-native';
import VIcon from '../../components/common/VIcon';
import { MainSubContainer} from '../../components/common/CommonStyles';
import { useTheme } from '../../contexts/theme';
import VButton2 from '../../components/Button/Button2';
import { TextInput } from '../../components/Input/TextInput';




const Title = styled.View`
width: 100%;
height: 30px;

display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;

`;

const TextFieldView = styled.View`
    margin-top: 28px;
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

`;


const StyledText = styled.Text`
    color: ${(props)=>props.lightMode?"#495057":"#BDBDBD"};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    text-transform: uppercase;
    margin-bottom: 8px;

`;

const StyledView = styled.View`
    background: ${props=>props.lightMode?"#f7f5f5":"#212121"};
    ${props=>props.lightMode?" border: 1px solid #dde2e5;":""}
  border-radius: 8px;
  width: 100%;
  height: 48px;

  display: flex;
  flex-direction: row;

  align-items: center;
  
  `;

const StyledInput = styled.TextInput`
color: ${props=>props.lightMode?"#101010":"#FAFAFA"};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-left: 21px;
  height: 48px;

  width: 90%;
`;

const StyledLayer = styled.View`
  color: #101010;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding-left: 21px;
  height: 48px;

  width: 90%;

  
`;

const StyledImage = styled.Image`
    width: 25px;
    height: 25px;
    

`;


export default function AddCustomToken() {

    const theme = useTheme();
    const [contractAddr,setContractAddr] = useState("");
    const [name,setName] = useState("");
    const [symbol,setSymbol] = useState("");
    const [decimals,setDecimals] = useState("");


    const [dropdown,setDropdown ] = useState(false);

   

  return (
    <Screen>
      
        <MainSubContainer>
            <Title >
                    <VIcon
                        name="chevron-back"
                        color={theme.mode=='light'?"black":"white"}
                    />
                      <Text style={{
                          color: theme.mode=="light"?'black':'#EEEEEE',
                          fontSize: 20,
                          fontFamily:"GilroySemiBold",
                          lineHeight: 23,
                          fontWeight: "400"
                        
                      }}>Add Custom Token</Text>
            </Title>

     
            <TextFieldView>
                <StyledText lightMode={theme.mode=='light'?true:false}>NETWORK</StyledText>
                <TouchableOpacity style={{width:"100%"}}>
                <StyledView lightMode={theme.mode=='light'?true:false}>
                    <StyledLayer   />
                    <VIcon name="chevron-down"/>
                </StyledView>
                </TouchableOpacity>     
            </TextFieldView>
       
            
            <TextFieldView>
                <StyledText lightMode={theme.mode=='light'?true:false}>CONTRACT ADDRESS</StyledText>
                <StyledView lightMode={theme.mode=='light'?true:false}>
                    <StyledInput lightMode={theme.mode=='light'?true:false}  value={contractAddr} onChangeText={setContractAddr} selectionColor={theme.mode=='light'?'black':'white'} ></StyledInput>
                    <TouchableOpacity>
                    <StyledImage source={require("../../../assets/icons/wallet/Scan.png")}/>
                    </TouchableOpacity>
                </StyledView>
            </TextFieldView>

            <TextFieldView>
                <StyledText lightMode={theme.mode=='light'?true:false}>NAME</StyledText>
                <TextInput value={name} onChangeText={setName}></TextInput>
            </TextFieldView>
            
            <TextFieldView>
                <StyledText lightMode={theme.mode=='light'?true:false}>SYMBOL</StyledText>
                <TextInput value={symbol} onChangeText={setSymbol}></TextInput>
            </TextFieldView>

            <TextFieldView>
                <StyledText lightMode={theme.mode=='light'?true:false}>DECIMALS</StyledText>
                <TextInput value={decimals} onChangeText={setDecimals} />
            </TextFieldView>

            <View style={{marginBottom:30,width:"100%",marginTop:20}}>
            <VButton2 label="Save" />
            </View>
        </MainSubContainer>
    </Screen>
  )
}
