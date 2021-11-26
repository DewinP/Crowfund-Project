import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ILoginInput,
  IProject,
  IProjectInput,
  ISignupInput,
  IUser,
} from "../../intefaces";

export const api = createApi({
  reducerPath: "apiPath",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}`,
  }),
  tagTypes: ["Project", "Me"],
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
      createProject: build.mutation<string, IProjectInput>({
        query: (input) => ({
          url: "projects",
          method: "POST",
          body: input,
          credentials: "include",
        }),
        invalidatesTags: [{ type: "Project", id: "LIST" }],
      }),
      findProject: build.query<IProject, string>({
        query: (projectId) => ({
          url: `projects/${projectId}`,
        }),
        providesTags: (p) => [{ type: "Project", id: p?.projectId }],
      }),
      findAllProjects: build.query<IProject[], void>({
        query: () => ({
          url: "projects",
        }),
        providesTags: [{ type: "Project", id: "LIST" }],
      }),
    };
  },
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutMutation,
  useMeQuery,
  useFindProjectQuery,
  useFindAllProjectsQuery,
  useCreateProjectMutation,
} = api;
