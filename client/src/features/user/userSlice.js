import { apiSlice } from "../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserId: builder.query({
      query: () => "/auth",
      providesTags: ["Auth", "Cart"],
    }),
  }),
});

export const { useGetUserIdQuery } = userApi;
