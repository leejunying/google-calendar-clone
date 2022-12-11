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
    if (display == "month") return <MonthChart />;
  };
  //Modal
  const [isOpen,setIsOpen]=useState<boolean>(false)

  const onClose=()=>{
    setIsOpen(false)
  }
  <DateModal isOpen={isOpen} onClose={onClose}  ></DateModal>


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
              
             width:"100%",
            backgroundColor: "#FFFFF",
            overflow: matches ? "scroll" : "hidden",
            overflowX: "hidden",
          }}
          item={true}
        >
          <Sidebar></Sidebar>
        </Grid>
        <Grid style={{overflowY:"scroll"}} md={10} xs={6} item={true}>
          {renderChart()}
          

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
