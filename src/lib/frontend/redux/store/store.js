import { configureStore } from "@reduxjs/toolkit";
import jobSlice  from "../features/jobSlice";

export const store = configureStore({
    reducer:{
          jobs:jobSlice     
    },
})