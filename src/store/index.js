import { configureStore } from "@reduxjs/toolkit";
import demo from "./actions/demo";
import api from "./api";

export const store = configureStore({
    reducer: {
        demo,
        api: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});