import { createSlice } from "@reduxjs/toolkit";

export const demo = createSlice({
    name: "demo",
    initialState: {
        count: 0,
    },
    reducers: {
        add_count: (state, action) => {
            const count = action.payload;
            state.count = state.count + count;
        }
    },
});

export const { add_count } = demo.actions;
export default demo.reducer;