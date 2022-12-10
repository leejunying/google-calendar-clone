import React, { useEffect,useState } from "react";
import { Grid } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DayChart from "../../pages/Calendar/Day/index";
import MonthChart from "../../pages/Calendar/Month";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector, useDispatch } from "react-redux";
import { updatedate } from "../../store/Reducers/globaldata";
import DateModal from "../../components/Modal/index"

const Dashboard = () => {
  const matches = useMediaQuery("(max-width:420px)");
  const dispatch = useDispatch();

  //get display
  const display=useSelector((state:any)=>state?.data?.display)
    //render chart
  const renderChart = () => {
    if (display == "day") return <DayChart onOpen={onOpen} />;
    if (display == "month") return <MonthChart onOpen={onOpen} />;
  };
  //Modal
  const [isOpen,setIsOpen]=useState<boolean>(false)

  const onClose=()=>{
    setIsOpen(false)
  }

  const onOpen=()=>{
    setIsOpen(true)
  }

  useEffect(() => {

    const today=new Date()

    const nowdate={
      day:today.getDate(),
      month:today.getMonth(),
      year:today.getFullYear()

    }
 
    dispatch(updatedate(nowdate));
  }, []);

  return (
    <Grid
      container
      style={{ height: "auto", backgroundColor: "#E4F6ED" }}
      display="flex"
      flexDirection="column"
    >
      <Header></Header>
      <Grid container display="flex">
        <Grid
          md={2}
          xs={6}
          style={{
            maxWidth: "258px",
            backgroundColor: "#FFFFF",
            overflow: matches ? "scroll" : "hidden",
            overflowX: "hidden",
          }}
          item={true}
        >
          <Sidebar></Sidebar>
        </Grid>
        <Grid md={10} xs={6} item={true}>
          {renderChart()}
          <DateModal isOpen={isOpen} onClose={onClose} data={{month:11,year:2022,day:10}}></DateModal>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
