import { RootState } from "..";

export const selectToken = (state: RootState) => state.token;

export const selectUsers = (state: RootState) => state.users;
