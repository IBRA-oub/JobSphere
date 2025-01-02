import { configureStore } from "@reduxjs/toolkit";
import jobSlice  from "../features/jobSlice";
import registerSlice  from "../features/registerSlice";

export const store = configureStore({
    reducer:{
          jobs:jobSlice,
          register : registerSlice     
    },
})