import { configureStore } from "@reduxjs/toolkit";
import demo from "./actions/calculator";
import api from "./api";

export const store = configureStore({
    reducer: {
        demo,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});