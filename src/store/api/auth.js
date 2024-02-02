import { toast } from "react-hot-toast";

export default (builder) => ({
    login: builder.mutation({
        query: (data) => ({
            url: "/auth/login",
            method: "POST",
            body: data
        }),
        transformResponse: (response) => {
            if (response.message) toast.success(response.message);
            return response;
        },
        transformErrorResponse: (error) => {
            toast.error(error.data?.message || "Ocurrió un problema");
            return error;
        }
    }),
});