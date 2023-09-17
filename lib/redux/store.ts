/* Core */
import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import session from "redux-persist/lib/storage";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";

/* Instruments */
import { rootReducer } from "./rootReducer";
import { middleware } from "./middleware";

const persistConfig = {
  key: "root",
  storage: session,
  whiteList: ["counter"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export let persistor = persistStore(store);

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
