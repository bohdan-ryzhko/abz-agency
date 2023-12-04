import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tokenReducer, { removeToken } from "./tokenSlice/slice";
import usersReducer from "./usersSlice/slice";
import { DefaultMiddleware } from "../d";
import { fetchToken } from "./tokenSlice/operations";
import { fetchUsers } from "./usersSlice/operations";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

const tokenPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const reducer = combineReducers({
  token: persistReducer(tokenPersistConfig, tokenReducer),
  users: usersReducer,
});

const middleware = (getDefaultMiddleware: DefaultMiddleware) => {
  return getDefaultMiddleware({ serializableCheck: false });
}

const store = configureStore({
  reducer,
  middleware,
});

const persistor = persistStore(store);

export {
  store,
  persistor,
  removeToken,
  fetchToken,
  fetchUsers,
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
