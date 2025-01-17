import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from 'js-cookie';


const initialState = {
    user: [],
    loading: false,
    error: null,
}

export const login = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_CLIENT_URL}/api/auth/login`, data);
        const { token, existingUser } = response.data;
        if(token && existingUser){
            Cookies.set('token', token, {
                httpOnly: false, 
                secure: process.env.NODE_ENV,
                sameSite: 'strict', 
                expires: 1, 
              });
            localStorage.setItem('token', token);
            localStorage.setItem('fullName', existingUser.fullName);
            localStorage.setItem('email', existingUser.email);
            localStorage.setItem('id', existingUser._id);
        }
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload
            })
            .addCase(login.rejected), (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }
    }
});
export default loginSlice.reducer