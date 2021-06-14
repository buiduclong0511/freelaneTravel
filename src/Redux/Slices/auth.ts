import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IAuth, ILogin } from "@interfaces";
import { authApi } from "@api";

export const login = createAsyncThunk("auth/login", async (values: ILogin, { rejectWithValue }) => {
    try {
        const res = await authApi.login(values);

        return res.data as IAuth;
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
});

interface IState {
    auth: IAuth | null;
    isLoading: boolean;
    error: string;
}

const initialState: IState = {
    auth: null,
    isLoading: false,
    error: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action: { payload: IAuth }) => {
            state.auth = action.payload;
            state.isLoading = false;
        });

        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(login.rejected, (state) => {
            state.auth = null;
            state.isLoading = false;
        });
    },
});

export default authSlice.reducer;
