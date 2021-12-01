import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ILoginInput,
  IPaymentSession,
  IPaymentSessionInput,
  IPledge,
  IPledgeInput,
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
  tagTypes: ["Project", "Me", "Pledge"],
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
          url: "users/me",
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
      updateProject: build.mutation<
        string,
        Partial<IProject> & Pick<IProject, "_id">
      >({
        query: (input) => ({
          url: "projects",
          method: "PATCH",
          body: input,
          credentials: "include",
        }),
      }),
      findProject: build.query<IProject, string>({
        query: (projectId) => ({
          url: `projects/${projectId}`,
        }),
        providesTags: (p) => [{ type: "Project" as const, id: p?._id }],
      }),
      findAllProjects: build.query<IProject[], void>({
        query: () => ({
          url: "projects",
        }),
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ _id }) => ({
                  type: "Project" as const,
                  id: _id,
                })),
                { type: "Project" as const, id: "LIST" },
              ]
            : [{ type: "Project" as const, id: "LIST" }],
      }),
      createCheckoutSession: build.mutation<
        IPaymentSession,
        IPaymentSessionInput
      >({
        query: (input) => ({
          url: `stripe/session/`,
          method: "POST",
          body: input,
          credentials: "include",
        }),
      }),
      createPledge: build.mutation<IPledge, IPledgeInput>({
        query: (input) => ({
          url: "pledges",
          method: "POST",
          body: input,
          credentials: "include",
        }),
        invalidatesTags: (result) => [{ type: "Pledge", id: result?.project }],
      }),
      findAllPledgesByUser: build.query<IPledge[], void>({
        query: () => ({
          url: "pledges",
          method: "GET",
          credentials: "include",
          providesTags: (pledgeResult: IPledge[]) =>
            pledgeResult
              ? [
                  ...pledgeResult.map(({ _id }) => ({
                    type: "Pledge" as const,
                    id: _id,
                  })),
                  { type: "Pledge" as const, id: pledgeResult[0].user },
                ]
              : [{ type: "Pledge" as const, id: pledgeResult[0].user }],
        }),
      }),
      findAllPledgesByProject: build.query<IPledge[], { projectId: string }>({
        query: ({ projectId }) => ({
          url: `pledges/project/${projectId}`,
          method: "GET",
          credentials: "include",
          providesTags: (pledgeResult: IPledge[]) =>
            pledgeResult
              ? [
                  ...pledgeResult.map(({ _id }) => ({
                    type: "Pledge" as const,
                    id: _id,
                  })),
                  { type: "Pledge" as const, id: pledgeResult[0].project },
                ]
              : [{ type: "Pledge" as const, id: pledgeResult[0].project }],
        }),
      }),
    };
  },
});

export const {
  useSignupUserMutation,
  useFindAllPledgesByUserQuery,
  useLoginUserMutation,
  useLogoutMutation,
  useMeQuery,
  useFindProjectQuery,
  useFindAllProjectsQuery,
  useCreateProjectMutation,
  useCreateCheckoutSessionMutation,
  useCreatePledgeMutation,
  useFindAllPledgesByProjectQuery,
} = api;
