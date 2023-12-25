import React, { useState } from 'react';
import styled from 'styled-components';

interface IProps{

    title:string;
    getChildText:(msg:string)=>void;
}

const ChildContainer=styled.div`
    

  
  border: 1px solid blue;
  box-sizing: border-box;
  background-color:yellow;
  width: 300px;
  height: 160px;
  margin-left: 20px;
  
`

const ChildTitle=styled.h2`
    font-size: 30px;
`

const ChildPara=styled.p`
    
`

const ChildButton=styled.button``

const ChildComponent:React.FC<IProps> = (props) => {

    const[title ,setTitle]=useState('Iam From Child');

    const clickButton=()=>{

        props.getChildText(msg);
    }
  return (
    <ChildContainer>
        <ChildTitle>{title}</ChildTitle>
        <ChildPara>From Parent:{props.title}</ChildPara>
        <ChildButton type='button' onClick={clickButton} >Click Me</ChildButton>

    </ChildContainer>
  )
}

export default ChildComponent;