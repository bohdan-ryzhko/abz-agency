import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { FetchTokenResponse } from "../../d";
import { toast } from "react-toastify";

export const fetchToken = createAsyncThunk(
  "fetch-token",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<FetchTokenResponse> = await axios.get("token");

      toast.success("You have a token");

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("Token is not available");
      return rejectWithValue(error);
    }
  }
);
