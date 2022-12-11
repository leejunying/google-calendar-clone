import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  monthText,
  getNumberOfDaysInMonth,
  getSortedDays,
  range,
 
} from "../../utils/index";
import { Header, Body, SevenColGrid } from "./styled";
import { useSelector,useDispatch } from "react-redux";
 import { updatedate, updatedateselect} from "../../store/Reducers/globaldata";
const DatePickerComponent = () => {
  //state
  const nowday=new Date()
  //global data
  const data= useSelector((state:any)=>state?.data)

   const dispatch=useDispatch()




  // const [month, setMonth] = useState<number>(data?.month);
  // const [year, setYear] = useState<number>(data?.year);
  const [selectedDate,setSelectedDate]=useState<any>()
 


  //mount
  
  //function
  const handleSelection=(day:any)=>{

    setSelectedDate(new Date(data?.year,data?.month,day))

    let select =new Date(data?.year,data?.month,day)
    select.setHours(0,0,0,0)

    dispatch(updatedateselect(select.getTime()))

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
    <Grid
      style={{ width: "100%", padding: "10px", margin: "20px 0 20px 0" }}
      className="Datepicker"
    >
      <Header>
        <KeyboardArrowLeftIcon style={{cursor:"pointer"}} onClick={preMonth}></KeyboardArrowLeftIcon>
        <p> {monthText(data?.month)} {data?.year} </p>
        <KeyboardArrowRightIcon style={{cursor:"pointer"}} onClick={nextMonth}></KeyboardArrowRightIcon>
      </Header>
      <Body>
        <SevenColGrid>
          {getSortedDays(data?.year, data?.month).map((day: any) => (
            <p key={day} style={{ fontWeight: "600" }}>{day}</p>
          ))}
        </SevenColGrid>
        <SevenColGrid >
          {range(1, getNumberOfDaysInMonth(data?.year, data?.month) + 1).map((day) =>{ 
            
       

            return  (
            <p key={day}  onClick={()=>handleSelection(day)}
            
            className={
                data?.selectedDate=== new Date(data?.year,data?.month,day,0,0,0,0).getTime() ?"active":
                new Date(data?.year,data?.month,day).getTime() < new Date(nowday.getFullYear(),nowday.getMonth(),nowday.getDate()).getTime()?"oldday":
                new Date(nowday.getFullYear(),nowday.getMonth(),nowday.getDate()).getTime()===new Date(data?.year,data?.month,day).getTime()?"today":""
              
                
            }
            
            >{day}</p>
          )})}
        </SevenColGrid>
      </Body>
    </Grid>
  );
};
export default DatePickerComponent;
