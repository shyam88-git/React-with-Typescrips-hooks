import React, { useState } from 'react';
import styled from 'styled-components';
import { IRegister } from '../models/IRegister';
import { UserService } from '../services/UserService';


const Register: React.FC = () => {
    const[registerUser ,setRegisterUser]=useState<IRegister>({

        username:'',
        email:'',
        password:'',
        selectDestination:[],
        gender:[],
        bio:'',
        terms:false,
    });

    
    const handleChange=(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        setRegisterUser({

            ...registerUser,
            [event.target.name]:event.target.value
        })

        
    }

    const onChangeTerms=(event:React.ChangeEvent<HTMLInputElement>)=>{

        setRegisterUser({

            ...registerUser,
            [event.target.name]:event.target.checked
        })
    }

    const handleSubmit=(event:React.ChangeEvent<HTMLFormElement>)=>{

        event.preventDefault();
        if(isFormFilled()){
            UserService.sendRegister(registerUser);


        }
        else{
            console.log("Please fill up all the field");
        }
        

    }
    
    const isFormFilled=()=>{

        return(
             registerUser.username!=='' &&
             registerUser.email!=='' &&
             registerUser.password!=='' &&
             registerUser.selectDestination.length>0 &&
             registerUser.gender.length>0 && 
             registerUser.bio!=='' &&
             registerUser.terms


        )
    }

    

    
    
  return (
    <FormContainer>
      <FormTitleB>
        <FormTitle>Registration</FormTitle>
      </FormTitleB>
      <FormBody onSubmit={handleSubmit}>
        <FormInput value={registerUser.username} name='username' onChange={handleChange} type='text' placeholder="User Name" />
        <FormInput type='text' value={registerUser.email} name='email'onChange={handleChange}  placeholder="Email" />
        <FormInput type='password' value={registerUser.password} name ='password'onChange={handleChange}  placeholder="Password" />
        <FormSelect name="selectDestination"  id="cars"  onChange={handleChange}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </FormSelect>
        <FormRadioContainer>
          <FormRadioLabel >
            <FormRadio name="gender" value="male" onChange={handleChange} />
            Male
          </FormRadioLabel>
          <FormRadioLabel>
            <FormRadio name="gender" value="female" onChange={handleChange} />
            Female
          </FormRadioLabel>
        </FormRadioContainer>
        <FormTextArea placeholder="Bio" value={registerUser.bio} onChange={handleChange}  name="bio" rows={4}></FormTextArea>
        <TermsContainer>
        <TermsCheckboxLabel>
          <TermsCheckbox name='terms'  onChange={onChangeTerms} />
          I agree to the terms and conditions
        </TermsCheckboxLabel>
      </TermsContainer>
      <SubmitButton type="submit" disabled ={!isFormFilled()}>Register</SubmitButton>
      </FormBody>
      
    </FormContainer>
  );
};




export default Register;


const FormContainer = styled.div`
  margin-top: 10%;
  padding: 0;
  width: 30%;
  border: 1px solid black;
  margin-left: 30%;
`;

const FormTitleB = styled.div`
  padding: 0px;
  margin: 0;
  box-sizing: border-box;
  background-color: yellow;
  border: 3px solid;
`;

const FormTitle = styled.h2`
  font-size: 30px;
  text-align: center;
  border: 1px solid yellow;
`;

const FormBody = styled.form`
  margin-top: 5px;
  padding: 5px;
  width: 100%;
`;

const FormInput = styled.input`
  width: 70%;
  margin-top: 10px;
  margin-left: 70px;
  align-items: center;
  border-radius: 5%;
  padding: 8px 10px;
  box-sizing: border-box;
`;

const FormSelect = styled.select`
  width: 70%;
  margin-top: 10px;
  margin-left: 70px;
  align-items: center;
  border-radius: 5%;
  padding: 8px 10px;
  box-sizing: border-box;
`;

const FormRadioContainer = styled.div`
  margin-top: 10px;
  margin-left: 70px;
`;

const FormRadioLabel = styled.label`
  margin-right: 10px;
`;

const FormRadio = styled.input.attrs({ type: 'radio' })`
  margin-right: 5px;
`;

const FormTextArea = styled.textarea`
  width: 70%;
  margin-top: 10px;
  margin-left: 70px;
  border-radius: 5%;
  padding: 8px 10px;
  box-sizing: border-box;
`;

const TermsContainer = styled.div`
  margin-top: 10px;
  margin-left: 70px;
`;

const TermsCheckboxLabel = styled.label`
  margin-right: 10px;
`;

const TermsCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  margin-left: 70px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5%;
  cursor: pointer;
`;

