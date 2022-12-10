import { styled as muistyle  } from '@mui/material/styles';
import styled from '@emotion/styled';
import { style } from '@mui/system';

import {Grid,TextField,Box,Paper, Hidden} from '@mui/material'

const SidebarWrap = muistyle(Grid)(({ theme }) => ({
    position:"relative",
     width:"256px",
       margin:"10px 5px 0 5px",
     padding:"5px",
     height:"64px"
  }));
 

 

 
 

export { SidebarWrap }