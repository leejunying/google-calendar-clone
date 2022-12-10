import react, { useState } from "react";
import { Box, TextField, FormControlLabel,Grid,FormControl,FormLabel } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
 import { useForm, SubmitHandler, Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { updatevents } from "../../store/Reducers/globaldata";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
const style = {
  position: "absolute" as "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 550,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IModal {
  onClose: () => any;
  isOpen: boolean;
  data: any;
}

export default function DateModal({ isOpen, data, onClose }: IModal) {
  //picker format
  const format = "DD/MM/YYYY";

  //global state
  const selectedDate = useSelector((state: any) => state?.data?.selectedDate);
  const dispatch = useDispatch();
  //stepup hook form
  const {
    handleSubmit,
    control,
    // formState: { isSubmitting },
    register,
    watch,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  //function
  const onSubmit = (data: any) => {
    const fromdate = new Date(
      data.fromdate.year,
      data.fromdate.month.number,
      data.fromdate.day
    );
    const todate = new Date(
      data.todate.year,
      data.todate.month.number,
      data.todate.day
    );

    var fromtime = 0;
    var totime = 0;

    if (fromdate.getTime() > todate.getTime()) {
      fromtime = fromdate.getTime();
      totime = todate.getTime();
    } else {
      totime = fromdate.getTime();
      fromtime = todate.getTime();
    }

    const objevent = {
      title: data?.title ? data.title : "No title",
      describe: data?.describe ? data.describe : "No describe",
      fromtime: fromtime,
      totime: totime,
      meeting: data?.meeting,
      personal: data?.personal,
      specail: data?.specail,
    };
    console.log(data)
      
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
                      value={selectedDate ? selectedDate : value ? value : ""}
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
                      value={selectedDate ? selectedDate : value ? value : ""}
                      onChange={(date: any) => {
                        onChange(date?.isValid ? date : "");
                      }}
                    />
                  </>
                )}
              />
            </Grid>
             
            <Grid xs={12} display="flex" justifyContent={"space-between"}>
            
            <FormControl component="fieldset">
  <FormLabel component="legend">Promoting</FormLabel>
  <Controller
    rules={{ required: true }}
    control={control}
    name="promoting2"
    render={({ field }) => (
      <RadioGroup {...field}>
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
          control={<Radio color="warning"/>}
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
              SAVE
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
