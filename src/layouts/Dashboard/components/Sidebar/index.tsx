import React,{useState} from "react";
import { Grid } from "@mui/material";
import { SidebarWrap } from "./styled";
import DatePickerComponent from "../../../../components/Datepicker";
import Notification from "../../../../components/Notification";
import { useSelector, useDispatch } from "react-redux";
const Sidebar = () => {
  //excute global data
  const data = useSelector((state: any) => state?.data);

   return (
    <SidebarWrap>
      <Grid style={{minHeight:"90vh",  background:"white"}} container display="flex" flexDirection="column">
        <DatePickerComponent  ></DatePickerComponent>
        <h4 style={{textAlign:"center",width:"100%"}}>Upcomming Events</h4>
        <Notification></Notification>
      </Grid>
    </SidebarWrap>
  );
};
export default Sidebar;
