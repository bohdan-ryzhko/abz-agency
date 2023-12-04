import { createSlice } from "@reduxjs/toolkit";
import { TokenState } from "../../d";
import { fetchToken } from "./operations";

const initialState: TokenState = {
  isLoad: false,
  token: null,
  error: null,
}

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    removeToken(state) {
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchToken.pending, state => {
        state.isLoad = true;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.isLoad = false;
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.isLoad = false;
        state.error = action.payload;
      })
  }
});

export const { removeToken } = tokenSlice.actions;
export default tokenSlice.reducer;
