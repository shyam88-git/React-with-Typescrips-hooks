import React from 'react';
import {NavLink } from 'react-router-dom';
import Nav from './Nav';
import {styled} from 'styled-components';
const Header:React.FC=()=>{

    const MainHeader=styled.header `
        padding: 0 4.8rem;
        height: 8rem;
        
        display: flex;
        background-color: ${({theme})=>theme.colors.bg};
        justify-content: space-between;
        align-items: center;
        box-shadow:${({theme})=>theme.colors.shadow};
         border:2px solid beige;
          border-radius: 5px;
          border-style: hidden;

        .logo{

            height: 4rem;
            



        }

        

    `

    

    return(

        <MainHeader>
            <NavLink to="/">

                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjo3NJ23Hn9tJyhZnIyieUV_A2yXpdvUGEw&usqp=CAU" alt="image1"/>

            </NavLink>
            <Nav/>
        </MainHeader>
    )
}

export default Header;