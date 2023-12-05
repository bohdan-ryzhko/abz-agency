import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { PositionsState } from "../../d";

export const fetchPositions = createAsyncThunk<PositionsState>(
  "fetch-positions",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<PositionsState> = await axios.get("positions");

      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
