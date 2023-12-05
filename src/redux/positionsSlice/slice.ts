import { createSlice } from "@reduxjs/toolkit";
import { fetchPositions } from "./operations";
import { PositionsState } from "../../d";

const initialState: PositionsState = {
  positions: [],
  isLoad: false,
  error: null,
}

const positionsSlice = createSlice({
  name: "positions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPositions.pending, (state) => {
        state.isLoad = true;
      })
      .addCase(fetchPositions.fulfilled, (state, { payload }) => {
        state.isLoad = false;
        state.error = null;
        state.success = payload.success;
        state.positions = payload.positions;
      })
      .addCase(fetchPositions.rejected, (state, { payload }) => {
        state.isLoad = false;
        state.error = payload;
      })
  }
});

export default positionsSlice.reducer;
