import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import {
  HeaderWrap,
  MenuSvg,
  Boxicon,
  Boxicon2,
  Logo,
  Title,
  HeadBtn,
  ArrowLeft,
  ArrowRight,
} from "./styled";
 import { useSelector, useDispatch } from "react-redux";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {  updatedisplay } from "../../../../store/Reducers/globaldata";
const Header = () => {
  //state
  const [selectDisplay, setSelectDisplay] = useState<string>("month");
  //excute global data
  const data = useSelector((state: any) => state?.data);
   const dispatch =useDispatch()
  //fuction
  const handleChange = (event: SelectChangeEvent) => {
    setSelectDisplay(event.target.value as string);
    dispatch(updatedisplay(event.target.value as string))
  };
  //render
  return (
    <HeaderWrap>
      <Grid container display="flex" alignItems={"center"}>
        <Grid item={true} xs={2} display="flex" alignItems="center">
          <Boxicon display="flex" justifyContent={"center"} alignItems="center">
            <MenuSvg fontSize="large"></MenuSvg>
          </Boxicon>
          <Logo
            src={
              "https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_9_2x.png"
            }
          ></Logo>

          <Title>Calender</Title>
        </Grid>

        <Grid item={true} xs={3} display="flex" alignItems="center">
          <Grid xs={5} item={true}>
            {" "}
            <HeadBtn>Today</HeadBtn>
          </Grid>

          <Grid xs={1} style={{ marginRight: "10px" }} item={true}>
            <Boxicon2
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              <ArrowLeft></ArrowLeft>
            </Boxicon2>
          </Grid>
          <Grid xs={2} item={true}>
            <Boxicon2
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              <ArrowRight></ArrowRight>
            </Boxicon2>
          </Grid>
          <Grid
            xs={5}
            display="flex"
            style={{ fontSize: "18px", color: "blue", fontWeight: "600" }}
            item={true}
          >
            {selectDisplay=="day"? data.date : ""} {data.montheng}, {data.year}
          </Grid>
          
        </Grid>
        <Grid xs={2} display="flex" justifyContent="center">
            <Select style={{minWidth:"120px",height:"36px",color:"white",background:"#5684AE"}} value={selectDisplay} onChange={handleChange}>
              <MenuItem value={"day"} >Day</MenuItem>
              <MenuItem value={"week"}>Week</MenuItem>
              <MenuItem value={"month"}>Month</MenuItem>
              <MenuItem value={"year"}>Year</MenuItem>
              <MenuItem value={"vaction"}>Schedule</MenuItem>
            </Select>
          </Grid>
      </Grid>
    </HeaderWrap>
  );
};

export default Header;
