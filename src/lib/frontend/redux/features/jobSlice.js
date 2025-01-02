import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    jobs: [], 
    loading: false,
    error: null,
}

export const getJobs = createAsyncThunk('jobs/getJobs', async (_,{ rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users-function/all-job-offer-for-users`,{cache:'no-store'});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
});

 const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getJobs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
            })
            .addCase(getJobs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default jobSlice.reducer