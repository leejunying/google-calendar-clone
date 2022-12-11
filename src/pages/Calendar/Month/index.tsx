import { Grid } from "@mui/material";
import React from "react";
import { getCurrentDate } from "../../../utils/index";
import { useState, useEffect, useRef, useCallback } from "react";
 
import {
  monthText,
  getNumberOfDaysInMonth,
  getSortedDays,
  range,
} from "../../../utils/index";
import { SevenColGrid } from "./chart";
import { useSelector, useDispatch } from "react-redux";
import { updatedateselect,updateventid } from "../../../store/Reducers/globaldata";
import DateModal from "../../../components/Modal/index"

 
const MonthChart = () => {
  //state
  const nowday = new Date();
  const [isOpen,setIsOpen]=useState<boolean>(false)
  //global state
  const data = useSelector((state: any) => state?.data);


  const events = useSelector((state: any) => state?.events?.todos);
  const dispatch = useDispatch();
  //function
  const onClick = (year: number, month: number, day: number) => {
    const selecteddate = new Date(year, month, day);
    onOpen()
    dispatch(updatedateselect(selecteddate));
    
  };
 const onOpen=()=>{
  setIsOpen(true)
 }

  const onClose=()=>{
    setIsOpen(false)
  }

  const onClickEvent=(id:number)=>{
     dispatch(updateventid(id))
    onOpen

  }
 
  const renderEventDate = (year: number, month: number, day: number) => {
 
    let datetime = new Date(year, month, day);
    let found = events.filter((data: any,indx:number) => {
 
      const fromdate = new Date(data.fromtime);
      const todate = new Date(data.totime);
      // console.log("from",new Date(data.fromtime));
      // console.log("to",new Date(data.totime));
      // console.log("date",datetime ,day);
      if (
        (fromdate.getDate()>= datetime.getDate() &&
        todate.getDate()<=datetime.getDate() &&
          fromdate.getMonth() == datetime.getMonth() &&
          fromdate.getFullYear() == datetime.getFullYear()) ||
        (todate.getDate() == datetime.getDate() &&
          todate.getMonth() == datetime.getMonth() &&
          todate.getFullYear() == datetime.getFullYear())
      ) {

        
         return data;
      }
    });

    console.log(found)
    
    if (found.length > 0 && found.length <= 3)
    {
      return found.map((data: any, indx: number) => {
         return (
          <span
          onClick={()=>onClickEvent(data?.index)}

            style={{
              height: "25px",
              textAlign:"center",
               borderRadius:"2px",
               marginBottom:"1px",
               padding:"2px",
               color:data.type == "personal"?"white":"black",
              background:
                data.type == "personal"
                  ? "#5684AE"
                  : data.type == "meeting"
                  ? "lightgreen"
                  : "#FFE4C8",
            }}
          >
            {data.title}
          </span>
        );
      });
    
    }
    if(found.length>3)
    {
      let newfound=found.filter((data:any,indx:number)=> { if(indx<3) return data})
      
      return <Grid display="flex" flexDirection="column" > 
        
        {newfound.map((data: any, indx: number) => {
 
        return (
          <span 
            onClick={()=>onClickEvent(data?.index)}
            style={{
              height: "29.7px",
              textAlign:"center",
               borderRadius:"2px",
               marginBottom:"1px",
               padding:"2px",
               color:data.type == "personal"?"white":"black",
              background:
                data.type == "personal"
                  ? "#5684AE"
                  : data.type == "meeting"
                  ? "lightgreen"
                  : "#FFE4C8",
            }}
          >
            {data.title}
          </span>
        );
      })}
      
      <span style={{background:"lightblue",textAlign:"center",
               borderRadius:"2px",
               marginBottom:"1px",
               padding:"2px",
              color:"black"}}>More {found.length-3} ticket</span>
      
         </Grid>

    }
    if(found.length==0)
    return ""
      
  };

  //render
  return (
    <Grid
      id={"timeline"}
      style={{
        width: "100%",
        height: "98vh",
        marginTop:"-4px",
         
      }}
    >
      <SevenColGrid>
        {getSortedDays(data?.year, data?.month).map((day: any) => (
          <p className={"head"} key={day} style={{ fontWeight: "600" }}>
            {day}
          </p>
        ))}
      </SevenColGrid>
      <SevenColGrid>
        {range(1, getNumberOfDaysInMonth(data?.year, data?.month) + 1).map(
          (day) => {
            return (
              <p
                onClick={() => onClick(data?.year, data?.month, day)}
                className="content"
                key={day}
              >
                <p
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    height: "25px",
                  }}
                >
                  {" "}
                  <span
                    className={
                      new Date(
                        nowday.getFullYear(),
                        nowday.getMonth(),
                        nowday.getDate()
                      ).getTime() ===
                      new Date(data?.year, data?.month, day).getTime()
                        ? "today"
                        : ""
                    }
                  >
                    {day}
                  </span>
                </p>
                {renderEventDate(data?.year, data.month, day)}
              </p>
            );
          }
        )}
      </SevenColGrid>

      <DateModal isOpen={isOpen} onClose={onClose}></DateModal>
    </Grid>
  );
};

export default MonthChart;
