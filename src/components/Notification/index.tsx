import { Grid } from "@mui/material";
import react, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { NotifiRow } from "./styled";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Icons from "../../assets/index";

const Notification = () => {
  //today
  var nowdate = new Date();
  nowdate.setHours(0, 0, 0, 0);

  //global events
  const events = useSelector((state: any) => state?.events?.todos);

  //function

  const foundEvents = () => {
    return events.filter((data: any) => {
      let fromdate = new Date(data.fromtime);

      let todate = new Date(data.totime);

      if (
        nowdate.getTime() == fromdate.getTime() ||
        nowdate.getTime() == todate.getTime()
      )
        return data;
    });
  };

  const renderEventsToday = () => {
    let found = foundEvents().reverse();

    if (found.length > 0  ) {
      return found.map((data: any ,indx:number) => {

        if(indx<4)
        {
          return (
        

            <NotifiRow container display={"flex"} type={data.type}>
              <Grid
                md={9}
                wrap="nowrap"
                display="flex"
                flexDirection="column"
                item={true}
              >
                <Typography noWrap>{data?.title}</Typography>
              </Grid>
              <Grid md={3} item={true}>
                <img 
                 style={{width:"32px",height:"32px"}}
                  src={
                    data.type == "personal"
                      ? Icons.personalico
                      : data.type == "meeting"
                      ? Icons.camera
                      : Icons.partyico
                  }
                ></img>
              </Grid>
            </NotifiRow>
          )
        }


      } );
    }
  };

  return (
    <Grid
      style={{ width: "100%"}}
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignContent="center"
    >
     
      <Grid
        style={{
          
          padding: "8px",
        }}
      >
        {renderEventsToday()}
        <span style={{display:"flex",justifyContent:"flex-end",width:"100%",color:"blue",cursor:"pointer"}}>All ticket</span>
      </Grid>
    </Grid>
  );
};

export default Notification;
