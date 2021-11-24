import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILoginInput, ISignupInput, IUser } from "../../interfaces/"

export const api = createApi({
  reducerPath: "apiPath",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/`,
  }),
  tagTypes: ["Me", "Project"],
  endpoints: (build) => {
    return {
      signupUser: build.mutation<{}, ISignupInput>({
        query: (input) => ({
          url: "users",
          method: "POST",
          body: input,
        }),
      }),
      loginUser: build.mutation<{}, ILoginInput>({
        query: (input) => ({
          url: "sessions",
          method: "POST",
          body: input,
          credentials: "include",
        }),
        invalidatesTags: ["Me"],
      }),
      logout: build.mutation<{}, void>({
        query: () => ({
          url: "sessions",
          method: "DELETE",
          credentials: "include",
        }),
        invalidatesTags: ["Me"],
      }),
      me: build.query<IUser, void>({
        query: () => ({
          url: "me",
          credentials: "include",
        }),
        providesTags: ["Me"],
      }),
    };
  },
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutMutation,
  useMeQuery,
} = api;