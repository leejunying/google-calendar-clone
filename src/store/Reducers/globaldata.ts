import { createSlice  } from "@reduxjs/toolkit";

 

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    month:0,
    year:0,
    day:0,
     userid:"",
    display:"month",
    selectedDate:0,
    selectedEvent:0,
    
  },
  reducers: {
    login: (state, action) => {
      state.userid = action.payload;
    },
    logout:(state,action)=>{
      state.userid=""
    },
 
    updatedate:(state,action)=>{
      state.year=action.payload?.year
      state.month=action.payload?.month
      action.payload?.day?state.day= action.payload?.day:state.day=state.day

    },
    updatedisplay:(state,action)=>{

      state.display=action.payload
    },
    updatedateselect:(state,action)=>{
      state.selectedDate=action.payload
    },
    updateventid:(state,action)=>{

      console.log("actionid",action.payload)

      state.selectedEvent=action.payload
    },
    
    
     
  },
});

//Action
export const { login,logout,updatedisplay,updatedate,updatedateselect,updateventid
} = dataSlice.actions;

export default dataSlice.reducer;
