import { createSlice } from "@reduxjs/toolkit";
import { IMe, IUser } from "../../intefaces";
import { RootState } from "../store";
import { api } from "./api";

interface AuthState {
  user: IUser | undefined;
  isFetching: boolean;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: undefined,
  isFetching: false,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addMatcher(api.endpoints.me.matchFulfilled, (state, { payload }) => {
      state.user = payload;
      state.isFetching = false;
      state.isLoggedIn = true;
    });
    build.addMatcher(api.endpoints.me.matchPending, (state) => {
      state.isFetching = true;
    });
    build.addMatcher(api.endpoints.me.matchRejected, (state) => {
      state.isFetching = false;
    });
    build.addMatcher(api.endpoints.logout.matchRejected, (state) => {
      state.user = undefined;
      state.isLoggedIn = false;
    });
  },
});

export const selectCurrentUser = (state: RootState) => state.auth;

export default authSlice.reducer;