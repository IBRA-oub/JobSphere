import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie";


const initialState = {
    user: [],
    loading: false,
    error: null,
}

export const register = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_CLIENT_URL}/api/auth/register`, data);
        const { token, user } = response.data;
         Cookies.set('token', token, {
                    httpOnly: false, 
                    secure: process.env.NODE_ENV,
                    sameSite: 'strict', 
                    expires: 1, 
                  });
        localStorage.setItem('token', token);
        localStorage.setItem('fullName', user.fullName);
        localStorage.setItem('email', user.email);
        localStorage.setItem('id', user._id);
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
            .addCase(register.rejected), (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }
    }
});
export default registerSlice.reducer