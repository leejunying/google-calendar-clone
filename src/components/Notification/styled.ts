import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Grid, TextField, Box, Paper, Hidden } from "@mui/material";

const NotifiRow = styled(Grid)<{ type: string }>`
 width:100%;
 min-height: 80px;
 max-height: 140px;
 padding:5px;
 margin-bottom: 3px;
 border-radius: 10px;
 cursor: pointer;
 &:hover{
  opacity: 0.7;
 }

  ${({ type }) =>
  
    type=="personal"
      ? css`
           color: white;
                      background-color: #5684AE;

        `
      : type=="meeting"? css`
            background-color: lightgreen;
           color:white
        `:
        css`
        background-color: #FFE4C8;
            color:#0F4C81
      `  }
`;

export { NotifiRow };
