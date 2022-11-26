import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const Dashboard = () => {
  
  return (
    <div>
      <DasboardDiv>
           <ImageWrapper src='https://tse3.mm.bing.net/th?id=OIP.IYur7XGIcoWuf2cQTSzziwHaEK&pid=Api&P=0' />
           <NavLink to='/users' >Go To Users Page</NavLink>
      </DasboardDiv>
    </div>
  )
}

const DasboardDiv=styled.div`
 width:70%;
 margin:auto;
 padding:2%;
`

const ImageWrapper=styled.img`
 width:100%;
 height:300px;
`
