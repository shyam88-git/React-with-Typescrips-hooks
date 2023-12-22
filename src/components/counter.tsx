import React, { useState } from 'react';
import styled from 'styled-components';

// Define the styled components
const CardContainer = styled.div`
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;



const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const CardButton = styled.button`
  font-size: 1rem;
  color: #555;
  background-color:red;
  padding: 5px 5px;
  margin-left: 5px;
`;

const CardNumber=styled.div`
    
    font-size: 20px;
    font-weight: bold;
`
// Define the interface for the props
interface CardProps {
  title: string;
  
 
}

// Create the card component
const Counter: React.FC<CardProps> = ({ title}) => {

    const[counter ,setCounter]=useState<number>(0);

     const counterIncrement=():void=>{

            setCounter(counter+1);
     }

     const handleDecrement=():void=>{

        setCounter(counter-1);
     }

      const handleDecrementByValue=():void=>{

        setCounter(counter+5);
      }
  return (
    <CardContainer>
      
      <CardContent>
        <CardTitle>{title}</CardTitle>
         <CardNumber>{counter}</CardNumber>
        <CardButton type="button" onClick={counterIncrement}>Increment</CardButton>
        <CardButton type="button" onClick={handleDecrement}>Decrement</CardButton>
        <CardButton type="button" onClick={handleDecrementByValue}>Increment By Value</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Counter;
