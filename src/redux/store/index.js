import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";
import playerReducer from "../reducers/player";
import searchReducer from "../reducers/search";
import artistReducer from "../reducers/artists";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["artist"],
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const mainReducer = combineReducers({
  player: playerReducer,
  search: searchReducer,
  artist: artistReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  // reducer
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
