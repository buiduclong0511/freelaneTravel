import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSplash: true
};

const splashSlice = createSlice({
    name: "splash",
    initialState: initialState,
    reducers: {
        toggleSplash: (state, action) => {
            state.isSplash = action.payload;
        }
    }
});

export const { toggleSplash } = splashSlice.actions;

export default splashSlice.reducer;