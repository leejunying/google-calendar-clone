  import { styled as muistyle  } from '@mui/material/styles';
import styled from '@emotion/styled';
import { style } from '@mui/system';

import {Grid,TextField,Box,Paper} from '@mui/material'

const Item = muistyle(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const InputText = muistyle(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    width:"100%",
    fontSize:"14px"
    
   
  
  }));


  const Boxform = muistyle(Box)(({ theme }) => ({
    margin:"20px 0 20px 0",
     maxWidth:"448px",
     padding:"10px",
     
  }));

  const BoxFooter = muistyle(Box)(({ theme }) => ({
   
    margin:"30px 10px 0 0",
    display:"flex",
    justifyContent:"flex-end",
    fontSize:"14px"
    
 }));

 


  const LoginPage=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  
  
  `

  const Container =  styled.div`
    margin: 15% 25% 20% 25%;
     padding:15px 5px 15px 5px;
    min-width:448px ;
    height:500px;
    display: flex;
     flex-direction: column;
     box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  
  `
 const Title = styled.span`
    display: flex;
    justify-content: center;
    color: #202124;
    font-size: 24px;
    font-family: "Google Sans","Noto Sans Myanmar UI",arial,sans-serif;
    font-weight: 400;
    line-height: 1.3333;

 `

export {Item,Container,LoginPage,Title,InputText,Boxform,BoxFooter}