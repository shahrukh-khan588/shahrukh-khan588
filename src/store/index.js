import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  persistReducer,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import inboxReducer from "./slices/filter";
import appSlice from "./services/appServices";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/user";

const persistUserReducer = persistReducer(
  {
    key: "auth",
    storage,
    blacklist: ["isLoading", "isSuccess", "message", "isError"],
  },
  authReducer
);

export const store = configureStore({
  reducer: {
    user: persistUserReducer,
    filter: inboxReducer,
    [appSlice.reducerPath]: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(appSlice.middleware),
});

export const persistor = persistStore(store);
