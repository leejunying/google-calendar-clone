import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    month:0,
    year:0,
    day:0,
    events:[],
    userid:"",
    display:"month",
    selectedDate:0,
    
  },
  reducers: {
    login: (state, action) => {
      state.userid = action.payload;
    },
    logout:(state,action)=>{
      state.userid=""
    },
    updatevents:(state,action)=>{
       state.events=action.payload
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
    }
    
    
     
  },
});

//Action
export const { login,logout,updatevents,updatedisplay,updatedate,updatedateselect
} = dataSlice.actions;

export default dataSlice.reducer;
