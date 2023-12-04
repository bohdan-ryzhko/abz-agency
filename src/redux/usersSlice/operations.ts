import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { UsersState, FetchUsersParams } from "../../d";

export const fetchUsers = createAsyncThunk<UsersState, FetchUsersParams>(
  "fetch-users",
  async ({ page, signal }, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<UsersState> = await axios.get(`users?page=${page}&count=6`, { signal });

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
