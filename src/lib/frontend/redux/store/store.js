import { configureStore } from "@reduxjs/toolkit";
import jobSlice  from "../features/jobSlice";
import registerSlice  from "../features/registerSlice";
import loginSlice  from "../features/loginSlice";

export const store = configureStore({
    reducer:{
          jobs:jobSlice,
          register : registerSlice,
          login : loginSlice     
    },
})