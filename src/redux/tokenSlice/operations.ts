import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { FetchTokenResponse } from "../../d";
import { toast } from "react-toastify";
import { setAuthHeader } from "../../utils";

export const fetchToken = createAsyncThunk<FetchTokenResponse>(
  "fetch-token",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<FetchTokenResponse> = await axios.get("token");

      setAuthHeader(response.data.token);

      toast.success("You have a token");

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("Token is not available");
      return rejectWithValue(error);
    }
  }
);
