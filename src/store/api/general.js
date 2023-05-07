export const generalEndpoints = (builder) => ({
    getCurrencies: builder.query({
        query: () => "/general/currencies",
    }),
    getTicker: builder.query({
        query: () => '/general/ticker',
    }),
});