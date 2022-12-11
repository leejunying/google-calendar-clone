import { createSlice ,PayloadAction } from "@reduxjs/toolkit";

interface Todo  {
    title:  string,
    describe: string,
    fromtime: number,
    totime: number,
    type:string,
    index:number,
    fromhour:number,
    tohour:number,
   };
 
interface TodoSliceState{
    todos:Todo[]
}

const initialState:TodoSliceState={
    todos:[]
}

 
export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
     
    updatevents:(state,action:PayloadAction<any>)=>{
      state.todos=[...state.todos,{
        title:action.payload.title,
        describe:action.payload.describe,
        fromtime:action.payload.fromtime,
        totime:action.payload.totime,
        type:action.payload.type,
        index:action.payload.index,
        fromhour:action.payload.fromhour,
        tohour:action.payload.tohour
      }]
    },
  
    
    
     
  },
});

//Action
export const {  updatevents
} = eventsSlice.actions;

export default eventsSlice.reducer;
