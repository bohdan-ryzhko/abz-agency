import { createSlice } from "@reduxjs/toolkit";
import { UsersState } from "../../d";
import { fetchUsers } from "./operations";

const initialState: UsersState = {
  users: [],
  isLoad: false,
  error: null,
  page: 1,
  total_pages: 0,
  total_users: 0,
  count: 0,
  links: {
    next_url: null,
    prev_url: null,
  },
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoad = false;
        state.error = null;
        state.count = payload.count;
        state.links = payload.links;
        state.page = payload.page;
        state.total_pages = payload.total_pages;
        state.total_users = payload.total_users;
        state.users.push(...payload.users);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
      })
  }
});

export default usersSlice.reducer;
