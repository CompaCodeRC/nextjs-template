import { createSlice } from "@reduxjs/toolkit";

export const demoSlice = createSlice({
    name: "demo",
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = demoSlice.actions;
export default demoSlice.reducer;