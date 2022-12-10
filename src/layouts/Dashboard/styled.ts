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
 

 


 

  const Container =  styled.div`
   display: flex;
   
  `
 

export { Container }