import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./Reducers/globaldata"
import eventsReducer from "./Reducers/events"
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
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


const persistedData  = persistReducer(persistConfig,dataReducer);
const persistedEvent=persistReducer(persistConfig,eventsReducer)
 

 const store = configureStore({
  reducer: { data:persistedData,events:persistedEvent  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
