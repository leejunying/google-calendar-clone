import { Grid } from "@mui/material";
import React from "react";
import { getCurrentDate } from "../../../utils/index";
import { useState, useEffect, useRef, useCallback } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  monthText,
  getNumberOfDaysInMonth,
  getSortedDays,
  range,
} from "../../../utils/index";
import { SevenColGrid } from "./chart";
import { useSelector, useDispatch } from "react-redux";
import { updatedateselect } from "../../../store/Reducers/globaldata";

interface IMonthChart {
  onOpen: () => any;
}

const MonthChart = ({ onOpen }: IMonthChart) => {
  //state
  const nowday = new Date();
  //global state
  const data = useSelector((state: any) => state?.data);

  console.log("Month data",data?.events)
  const dispatch = useDispatch();
  //function
  const onClick = (year: number, month: number, day: number) => {
    const selecteddate = new Date(year, month, day).getTime();
    dispatch(updatedateselect(selecteddate))
    onOpen()
  };

  //render
  return (
    <Grid
      id={"timeline"}
      style={{
        width: "100%",
        height: "90vh",
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
            );
          }
        )}
      </SevenColGrid>
    </Grid>
  );
};

export default MonthChart;
