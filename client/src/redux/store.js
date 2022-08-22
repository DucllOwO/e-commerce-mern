import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["cart"],
//   stateReconciler: autoMergeLevel2,
// };

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["loading"],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  cart: cartReducer,
});

//const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      storage.remove("user");
    });
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
