import { createSlice } from "@reduxjs/toolkit";
const dataSlice=createSlice({

   name:"dataSlice",
   initialState:[
    {name:"shiva",age:"21", batch:"oct",course:"MERN",edit:"edit"},
   {name:"prasad",age:"21",batch:"oct",course:"MERN",edit:"edit"},
   {name:"shiva",age:"21",batch:"oct",course:"MERN",edit:"edit"}
   ],
   reducers:{
    edit:(state,action)=>{
        state[action.payload.index]=action.payload.newObj
        console.log(action.payload)
        return(state)

    },
    add:(state,action)=>{
        state.push(action.payload)
        console.log(action.payload)
        return(state)

    }


   } 
});
export const {edit,add} = dataSlice.actions;
export default dataSlice.reducer