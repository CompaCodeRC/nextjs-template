import { createSlice } from "@reduxjs/toolkit";

export const demo = createSlice({
    name: "demo",
    initialState: {
        crypto: 'BTC',
        currency: 'pen',
    },
    reducers: {
        change: (state, action) => {
            const { crypto, currency } = action.payload;
            state.crypto = crypto;
            state.currency = currency;
        }
    },
});

export const { setDemo } = demo.actions;
export default demo.reducer;