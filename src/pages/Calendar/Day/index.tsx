import { Grid } from "@mui/material";
import React from "react";
import "./chart.css";
import { getCurrentDate } from "../../../utils/index";
import { useState, useEffect, useRef, useCallback } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

interface IDayChart{

  onOpen:()=>any

}

const DayChart = ({onOpen}:IDayChart) => {
  const myRef = React.useRef<HTMLInputElement>(null);

  const [currentTime, setCurrentTime] = useState<any>({});
  const [point, setPoint] = useState<number>(0);

  let hours = Array.from({ length: 24 }, (_, i) => i + 1);

  useEffect(() => {
    const nowtime = getCurrentDate();
    setCurrentTime(nowtime);

    setTimeout(() => {
      if (myRef != null && myRef != undefined) {
        myRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  }, []);

  const makePoint = (hour: number, minute: number, rowtime: number) => {
    //change to pm
    //0 to 50 bot to top px

    let point = 0;

    if (hour + 1 == rowtime) {
      point = Math.floor((minute * 50) / 60);

      return (
        <Grid
          ref={myRef}
          style={{ width: "100%", position: "absolute", top: `${point}px` }}
          display="flex"
          alignItems={"center"}
        >
          <span className="dot"></span>
          <span
            style={{ width: "100%", borderBottom: "2px solid red" }}
          ></span>
        </Grid>
      );
    }
  };

  return (
    <Grid
      id={"timeline"}
      style={{
        width:"100%",
        height: "90vh",
        marginTop:"16px",
         
        position: "relative",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      {hours.map((item) => {
        return (
          <Grid
            key={item}
            alignItems={"center"}
            display="flex"
            style={{ width: "100%", height: "50px", position: "relative" }}
          >
            <Grid
              display={"flex"}
              justifyContent="flex-end"
              alignItems={"flex-end"}
              style={{
                position: "relative",
                fontSize: "12px",
                width: "56px",
                height: "50px",
                borderRight: "1px solid blue",
                paddingRight: "10px",
              }}
            >
              <label style={{ marginBottom: "-8px" }}>
                {item > 12 ? `${item - 12} PM` : `${item} AM`}
              </label>
            </Grid>
            <Grid
              display={"flex"}
              style={{
                position: "relative",
                width: "100%",
                height: "50px",
                borderBottom: "1px solid blue",
                paddingRight: "10px",
                cursor: "pointer",
              }}
            >
              {makePoint(currentTime.hour, currentTime.minute, item)}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DayChart;
