import { configureStore } from "@reduxjs/toolkit";
import jobSlice  from "../features/jobSlice";
import registerSlice  from "../features/registerSlice";
import loginSlice  from "../features/loginSlice";
import applicationSlice  from "../features/applicationSlice";

export const store = configureStore({
    reducer:{
          jobs:jobSlice,
          register : registerSlice,
          login : loginSlice ,
          application : applicationSlice    
    },
})