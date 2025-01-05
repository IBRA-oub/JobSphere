const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import axios from "axios"

const initialState = {
    application: [],
    loading: false,
    error: null
}

export const getApplication = createAsyncThunk('api/getApplication', async (_, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_CLIENT_URL}/api/getApplication`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }

})

const getApplicationSlice = createSlice({
    name: 'getApplication',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getApplication.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(getApplication.fulfilled, (state, action) => {
                state.loading = false;
                state.application = action.payload
            })
            .addCase(getApplication.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default getApplicationSlice.reducer