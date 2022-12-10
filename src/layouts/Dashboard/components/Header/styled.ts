import { styled as muistyle } from "@mui/material/styles";
import styled from "@emotion/styled";
 import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Grid, TextField, Box, Paper, Hidden } from "@mui/material";

const HeaderWrap = muistyle(Grid)(({ theme }) => ({
  padding: "15px 40px 15px 30px",
  height: "64px",
  backgroundColor:"#E4F6ED"
}));

const Boxicon = styled(Grid)`
  width: 48px;
  height: 48px;

  border-radius: 50%;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`;

const Boxicon2 = styled(Grid)`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`;


const MenuSvg = styled(MenuIcon)`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const ArrowLeft = styled(KeyboardArrowLeftIcon)`
  cursor: pointer;
  width: 24px;
  height: 28px;
  color: #5f6368;

`;
const ArrowRight = styled(KeyboardArrowRightIcon)`
  cursor: pointer;
  color: #5f6368;

  width: 24px;
  height: 28px;
`;

const Logo = styled.img`
  width: 44px;
  height: 40px;
`;
const Title = styled.span`
  font-family: Google Sans, Roboto, Arial, sans-serif;
  color: #3c4043;
  font-size: 22px;
  padding-left: 4px;
`;

const HeadBtn = styled.button`
  margin: 12px 0 12px 0;
  outline-style: none;
  color: #5684AE;
  padding: 2px;
  text-align: center;
  height: 36px;
  width: 96.25px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  background-color: white;
  border: 0.5px solid lightblue;
  border-radius: 5px;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
`;

export { HeaderWrap, MenuSvg, Boxicon,Boxicon2, Logo, Title, HeadBtn,ArrowLeft,ArrowRight};
