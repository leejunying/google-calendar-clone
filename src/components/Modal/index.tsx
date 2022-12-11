import react, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  FormControlLabel,
  Grid,
  FormControl,
  FormLabel,
  Select,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { updatevents } from "../../store/Reducers/events";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
const style = {
  position: "absolute" as "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IModal {
  onClose: () => any;
  isOpen: boolean;
}

export default function DateModal({ isOpen, onClose }: IModal) {
  //picker format
  const format = "DD/MM/YYYY";

  //global state
  const events = useSelector((state: any) => state?.events?.todos);
  const eventid=useSelector((state:any)=>state?.data.selectedEvent)
  const dispatch = useDispatch();


  //stepup hook form
  const {
    handleSubmit,
    control,
    setValue,
    // formState: { isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });


    //mount

    useEffect(()=>{
      reset({})
      if(eventid)
      { 
        const data=events[eventid-1]
        setValue('describe',data.describe)
        setValue('fromtime',data.fromtime)
        setValue('totime',data.totime)
        setValue('type',data.type)
        setValue('title',data.title)
        setValue('index',data.index)
        setValue('fromhour',data.fromhour)
        setValue('tohour',data.tohour)
      }
   
      
  
    },[])
  //function
  const onSubmit = (data: any) => {

    
    let fromdate = new Date(
      `${data.fromdate.year}-${data.fromdate.month.number}-${data.fromdate.day}`
    );
    let todate = new Date(
      `${data.todate.year}-${data.todate.month.number}-${data.todate.day}`
    );

    fromdate.setHours(0, 0, 0, 0);
    todate.setHours(0, 0, 0, 0);

    var fromtime = 0;
    var totime = 0;

    if (fromdate > todate) {
      fromtime = fromdate.getTime();
      totime = todate.getTime();
    } else {
      totime = fromdate.getTime();
      fromtime = todate.getTime();
    }

 
    const objevent = {
      index:events.length+1,
      title: data?.title ? data.title : "No title",
      describe: data?.describe ? data.describe : "No describe",
      fromtime: fromtime,
      totime: totime,
      type: data?.type,
      
    };
    console.log("obj",objevent)
     dispatch(updatevents(objevent));
    reset({});
    onClose();
  };
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid display="flex" justifyContent="center">
            ADD NEW EVENT
          </Grid>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <TextField
                  fullWidth
                  {...field}
                  label="ADD TITLE"
                  margin="dense"
                  id="filled-search"
                  type="search"
                  variant="standard"
                />
              )}
            />

            <Controller
              control={control}
              name="describe"
              render={({ field }) => (
                <TextField
                  fullWidth
                  {...field}
                  label="Describe event"
                  margin="dense"
                  multiline
                  rows={4}
                />
              )}
            />
            <Grid
              xs={7}
              style={{ margin: "10px 0 10px 0" }}
              display="flex"
              justifyContent={"space-between"}
            >
              <Controller
                control={control}
                name="fromdate"
                rules={{ required: true }} //optional
                render={({
                  field: { onChange, name, value },
                  fieldState: { invalid, isDirty }, //optional
                  formState: { errors }, //optional, but necessary if you want to show an error message
                }) => (
                  <>
                    <span style={{ marginRight: "5px" }}>Date</span>
                    <DatePicker
                      format={format}
                      style={{ fontSize: "16px", width: "120px" }}
                      value={value || ""}
                      onChange={(date: any) => {
                        onChange(date?.isValid ? date : "");
                      }}
                    />
                  </>
                )}
              />

              <Controller
                control={control}
                name="todate"
                rules={{ required: true }} //optional
                render={({
                  field: { onChange, name, value },
                  fieldState: { invalid, isDirty }, //optional
                  formState: { errors }, //optional, but necessary if you want to show an error message
                }) => (
                  <>
                    <span style={{ margin: "0 5px 0 5px" }}>to</span>
                    <DatePicker
                      format={format}
                      style={{ fontSize: "16px", width: "120px" }}
                      value={value || ""}
                      onChange={(date: any) => {
                        let datadate = new Date(
                          date.year,
                          date.month.number,
                          date.day
                        );
                        onChange(date?.isValid ? date : "");
                      }}
                    />
                  </>
                )}
              />
            </Grid> <Grid xs={7} display="flex" justifyContent="space-between">
              <Grid xs={6} display="flex" alignItems="center">
                <FormLabel style={{marginRight:"10px"}} component="legend">Time </FormLabel>
                <FormControl component="fieldset">
                  <Controller
                    rules={{ required: true }}
                    control={control}
                    name="fromhour"
                    render={({ field }) => (
                      <Select style={{height:"35px"}} {...field} defaultValue={0}>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid xs={6} display="flex" alignItems="center">
                <FormLabel style={{marginRight:"20px"}} component="legend"> to </FormLabel>
                <FormControl component="fieldset">
                  <Controller
                    rules={{ required: true }}
                    control={control}
                    name="tohour"
                    render={({ field }) => (
                      <Select style={{height:"35px"}} {...field} defaultValue={0}>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={13}>13</MenuItem>
                        <MenuItem value={14}>14</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                        <MenuItem value={17}>17</MenuItem>
                        <MenuItem value={18}>18</MenuItem>
                        <MenuItem value={19}>19</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={21}>21</MenuItem>
                        <MenuItem value={22}>22</MenuItem>
                        <MenuItem value={23}>23</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid>
            </Grid>

            

            <Grid xs={12} display="flex" justifyContent={"space-between"}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Event type</FormLabel>
                <Controller 
              
                  rules={{ required: true }}
                  control={control}
                  name="type"
                  render={({ field }) => (
  
                    <RadioGroup   {...field}>
                      <FormControlLabel
                        value="personal"
                        control={<Radio color="info" />}
                        label="Personal"
                      />
                      <FormControlLabel
                        value="meeting"
                        control={<Radio color="success" />}
                        label="Meeting"
                      />
                      <FormControlLabel
                        value="specail"
                        control={<Radio color="warning" />}
                        label="Special"
                      />
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>

           

            <Button
              style={{ marginTop: "30px" }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {eventid?"Update":"Save"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
