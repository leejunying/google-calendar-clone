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
import {  updatedisplay,updatedate,updatedateselect } from "../../../../store/Reducers/globaldata"
import { monthText } from "../../../../utils/index";
const Header = () => {
  //state
  const [selectDisplay, setSelectDisplay] = useState<string>("month");
  //excute global data
  const data = useSelector((state: any) => state?.data);
  console.log(data)
   const dispatch =useDispatch()
  //fuction
  const handleChange = (event: SelectChangeEvent) => {
    setSelectDisplay(event.target.value as string);
    dispatch(updatedisplay(event.target.value as string))
  };


  const todayClick=()=>{
    const nowdate= new Date()
  
    dispatch(updatedate({month:nowdate.getMonth(),year:nowdate.getFullYear(),day:nowdate.getDate()}))
  }


  

   const preDay=()=>{
    let day =data?.day 
    let month =data?.month 
    let year= data?.year

    if(day>1)
     {
        day=day-1
        dispatch(updatedate({month:month,day:day,year:year}))


        let newdate=new Date(year,month,day,0,0,0,0)
        
        dispatch(updatedateselect(newdate.getTime()))
    }
    if(day==1&&month==0)
    {
        let last = new Date(year,11,0)
        day=last.getDate()
        year=year-1

        let newdate=new Date(year,11,day,0,0,0,0)
        dispatch(updatedateselect(newdate.getTime()))
        dispatch(updatedate({month:11,day:day,year:year}))
    }
    if(day==1&&month!=0)
    { 
      month=month-1 
      let last = new Date(year,11,0)
      day=last.getDate()
      let newdate=new Date(year,month,day,0,0,0,0)
        
      dispatch(updatedateselect(newdate.getTime()))
      dispatch(updatedate({month:month,day:day,year:year}))
    }


  }


  const nextDay=()=>{

    let day =data?.day 
    let month =data?.month 
    let year= data?.year
    let last = new Date(year,month,0).getDate()
    
     if(day<last&&month<=11)
     {
        day=day+1
        let newdate=new Date(year,month,day,0,0,0,0)
        
        dispatch(updatedateselect(newdate.getTime()))
        dispatch(updatedate({month:month,day:day,year:year}))
    }
    if(day==last&&month!=11)
    {   
         month=month+1
         day=1
         let newdate=new Date(year,month,day,0,0,0,0)
        
         dispatch(updatedateselect(newdate.getTime()))
        dispatch(updatedate({month:month,day:day,year:year}))
    }
    if(day==last&&month==11)
    { 
       year=year+1
       let newdate=new Date(year,1,1,0,0,0,0)
        
       dispatch(updatedateselect(newdate.getTime()))
      dispatch(updatedate({month:1,day:1,year:year}))
    }


   }

  const nextMonth = () => {
    let premonth=data?.month
    let preyear=data?.year
    if (premonth < 11) {
       premonth=premonth+1

      dispatch(updatedate({month:premonth,year:preyear}))
    } else {
      preyear=preyear+1  
      dispatch(updatedate({month:0,year:preyear}))
    }
  };

  const preMonth = () => {
    let premonth=data?.month
    let preyear=data?.year
    if (premonth > 0) {
      premonth=premonth-1
      dispatch(updatedate({month:premonth,year:preyear}))
    } else {
      preyear=preyear-1
       dispatch(updatedate({month:11,year:preyear}))
    }
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
            <HeadBtn onClick={todayClick}>Today</HeadBtn>
          </Grid>

          <Grid xs={1} style={{ marginRight: "10px" }} item={true}>
            <Boxicon2
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            > 
            {
              data?.display=="month"?<ArrowLeft onClick={preMonth}></ArrowLeft> :<ArrowLeft onClick={preDay}></ArrowLeft>
            }
              
            </Boxicon2>
          </Grid>
          <Grid xs={2} item={true}>
            <Boxicon2
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              {
                data?.display=="month"? <ArrowRight onClick={nextMonth}></ArrowRight>: <ArrowRight onClick={nextDay}></ArrowRight>
              }
             
            </Boxicon2>
          </Grid>
          <Grid
            xs={5}
            display="flex"
            style={{ fontSize: "18px", color: "blue", fontWeight: "600" }}
            item={true}
          >
            {selectDisplay=="day"? data.day : ""}  {monthText(data.month)}, {data.year}
          </Grid>
          
        </Grid>
        <Grid xs={2} display="flex" justifyContent="center">
            <Select style={{minWidth:"120px",height:"36px",color:"white",background:"#5684AE"}} value={selectDisplay} onChange={handleChange}>
              <MenuItem value={"day"} >Day</MenuItem>
              {/* <MenuItem value={"week"}>Week</MenuItem> */}
              <MenuItem value={"month"}>Month</MenuItem>
              {/* <MenuItem value={"year"}>Year</MenuItem>
              <MenuItem value={"vaction"}>Schedule</MenuItem> */}
            </Select>
          </Grid>
      </Grid>
    </HeaderWrap>
  );
};

export default Header;
