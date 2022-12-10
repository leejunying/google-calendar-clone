import React,{useState} from "react";
import { Grid } from "@mui/material";
import { SidebarWrap } from "./styled";
import DatePickerComponent from "../../../../components/Datepicker";
import { useSelector, useDispatch } from "react-redux";
const Sidebar = () => {
  //excute global data
  const data = useSelector((state: any) => state?.data);

   return (
    <SidebarWrap>
      <Grid style={{minHeight:"90vh",  background:"white"}} container display="flex" flexDirection="column">
        <DatePickerComponent  ></DatePickerComponent>
      </Grid>
    </SidebarWrap>
  );
};
export default Sidebar;
