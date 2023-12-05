import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { PersistPartial } from "redux-persist/es/persistReducer";

export type TokenState = {
  isLoad: boolean,
  error: unknown,
  token: string | null,
}

export type FetchTokenResponse = {
  success: boolean,
  token: string,
}

export type UserType = {
  id: string,
  name: string,
  email: string,
  phone: string,
  position: string,
  position_id: string,
  registration_timestamp: number,
  photo: string
};

export type UsersState = {
  users: UserType[],
  isLoad: boolean,
  error: unknown,
  page: number,
  total_pages: number,
  total_users: number,
  count: number,
  links: {
    next_url: null | string,
    prev_url: null | string
  },
}

export type FetchUsersParams = {
  signal: AbortSignal,
  page: number,
}

export type InitialRegisterValues = {
  name: string,
  email: string,
  phone: string,
  position_id: string,
  photo: null | File,
}

export type UserData = {
  data: FormData,
  token: string,
};

export type PositionType = {
  id: number,
  name: string,
}

export type PositionsState = {
  success?: boolean,
  positions: PositionType[],
  isLoad: boolean,
  error: unknown,
}

export type NewUser = {
  success: boolean,
  user_id: number,
  message: string,
}

export type NewUserCreated = {
  newUser: NewUser,
  users: UsersState,
}

export type DefaultMiddleware = GetDefaultMiddleware<{ token: TokenState & PersistPartial, users: UsersState, positions: PositionsState }>;
