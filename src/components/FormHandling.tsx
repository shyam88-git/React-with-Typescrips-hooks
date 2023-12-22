import React, { useState } from 'react';
import styled from 'styled-components';
import { IUser } from '../models/IUser';

const FormContainer = styled.div`
  width: 50%;
  margin: 0;
  padding: 0;
`;

const FormBody = styled.form`
  width: 30%;
  margin-top: 5px;
`;

const FormInput = styled.input`
  margin-top: 50px;
  margin-left: 20px;
  width: 100%; /* Set the width to 100% */
  padding: 8px; /* Add some padding for better appearance */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
`;

const FormHandling: React.FC = () => {
  const[user, setUserName]=useState<IUser>({

        username:'',
        password:''
  });

  const onInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{

     setUserName({
        ...user,
        [event.target.name]:event.target.value
     })





  }
    

  return (
    <>
      <FormContainer>
        {JSON.stringify(user)}
        <FormBody>
           
          <FormInput type='text' name='username' value={user.username} onChange={onInputChange} placeholder='Enter UserName'  />
          <FormInput type='text' name='password' value={user.password} onChange={onInputChange} placeholder='Enter UserName'  />
        </FormBody>
      </FormContainer>
    </>
  );
};

export default FormHandling;
