import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { UsersState, FetchUsersParams, UserData, NewUserCreated, NewUser } from "../../d";
import { toast } from "react-toastify";
import { setAuthHeader } from "../../utils";

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

export const createUser = createAsyncThunk<NewUserCreated, UserData>(
  "create-user",
  async ({ data, token }, { rejectWithValue }) => {
    try {
      setAuthHeader(token);
      const responseCreateUser: AxiosResponse<NewUser> = await axios.post("users", data);

      const responseUsers: AxiosResponse<UsersState> = await axios.get(`users?page=1&count=6`);

      toast.success("New user created!");

      return {
        newUser: responseCreateUser.data,
        users: responseUsers.data,
      };
    } catch (error: any) {
      console.log(error);

      toast.error(error.message);

      return rejectWithValue(error);
    }
  }
);
