import { RootState } from "..";

export const selectToken = (state: RootState) => state.token;

export const selectUsers = (state: RootState) => state.users;

export const position_ids = (state: RootState) => state.positions;
