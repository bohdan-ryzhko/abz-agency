import { combineReducers, configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tokenReducer, { removeToken } from "./tokenSlice/slice";
import { TokenState } from "../d";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { fetchToken } from "./tokenSlice/operations";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

const tokenPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const reducer = combineReducers({
  token: persistReducer(tokenPersistConfig, tokenReducer),
});

const middleware = (getDefaultMiddleware: GetDefaultMiddleware<{ token: TokenState & PersistPartial }>) => {
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
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
