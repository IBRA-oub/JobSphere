import { configureStore } from "@reduxjs/toolkit";
import jobSlice  from "../features/jobSlice";
import registerSlice  from "../features/registerSlice";
import loginSlice  from "../features/loginSlice";
import applicationSlice  from "../features/applicationSlice";
import getApplicationSlice  from "../features/getApplicationSlice";

export const store = configureStore({
    reducer:{
          jobs:jobSlice,
          register : registerSlice,
          login : loginSlice,
          application : applicationSlice,
          getApplication: getApplicationSlice,    
    },
})