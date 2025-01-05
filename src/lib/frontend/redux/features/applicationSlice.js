import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";


const initialState = {
    application: [],
    loading: false,
    error: null,
}

export const application = createAsyncThunk('/application', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_CLIENT_URL}/api/application`, data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(application.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(application.fulfilled,(state,action)=>{
            state.loading = false;
            state.application = action.payload
        })
        .addCase(application.rejected),(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }

});
export default applicationSlice.reducer