import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';
const MainHeder = styled.header` 
 height: 10rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 4rem;
}

@media (max-width:${({theme})=>theme.media.mobile}) { 
} 
`;


const Header = () => {
  return (
  <MainHeder>
     <NavLink to="/">
     <figure>
     <img  className='logo' src="http://localhost:3000/images/logo.png" alt="logo"  />
     </figure>
    
   </NavLink>
  
   <Nav></Nav>
   
   </MainHeder>
  )
}

export default Header
