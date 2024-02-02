import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getCookie } from "cookies-next";
import general from './general';
import auth from './auth';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_HOST,
        prepareHeaders: (headers) => {
            const token = getCookie("token");
            if (token) {
                headers.set("x-access-token", token);
            }
            return headers;
        }
    }),
    tagTypes: ["Demos"],
    endpoints: (builder) => ({
        ...general(builder),
        ...auth(builder),
    }),
});

export const {
    //General
    useGetCurrenciesQuery,
    useGetTickerQuery,

    //Auth
    useLoginMutation,
} = apiSlice;

export default apiSlice;