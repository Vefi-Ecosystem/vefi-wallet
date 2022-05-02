import React,{useState} from 'react';
import styled from 'styled-components/native'

const StyledView = styled.View`
        background: #F7F5F5;
        border: 1px solid #DDE2E5;
        border-radius: 8px;
        width: 315px;
        height: 48px;
`

const StyledInput = styled.TextInput`
    color: #101010;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding-left: 21px;
    height: 48px;
`

export default function TextInput() {

    const [text, onChangeText] = useState("");

   

    return (
      <StyledView>
        
        <StyledInput  
        onChangeText={onChangeText}
        value={text} 
        selectionColor={'black'}
        />

      </StyledView>
    );
  }
  