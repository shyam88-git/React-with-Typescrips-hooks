import React, { useState } from 'react';
import styled from 'styled-components';
import ChildComponent from './ChildComponent';


 const ParentContainer=styled.div`
   margin-top: 5px;
   margin-left: 30%;
  width: 500px;border: 1px solid blue;
  box-sizing: border-box;
  background-color: green;
  height: 300px;

 
  `
 const ParentTitle=styled.h2``

  
const ParentPara=styled.p``
const ParentComponent:React.FC = () => {
    const[title,setTitle]=useState<string>("Iam from Parent");
    const[childText ,setChildText]=useState();

     

    const getChildText=(msg:string):void=>{

        setChildText(msg);

     }
  return (

    <ParentContainer>
        <ParentTitle>{title}</ParentTitle>
        <ParentPara>From Child:{childText}</ParentPara>
        <ChildComponent title={title} getChildtext={getChildText}/>

    </ParentContainer>
     
  )
}

export default ParentComponent;