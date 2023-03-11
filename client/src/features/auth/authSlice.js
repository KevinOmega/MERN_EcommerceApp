import { apiSlice } from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    logIn: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),
    logOut: builder.mutation({
      query: () => "/auth/logout",
      invalidatesTags: ["Auth"],
    }),
    register: builder.mutation({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLogInMutation, useLogOutMutation, useRegisterMutation } =
  authApi;
