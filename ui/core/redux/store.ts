import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authReducer from './slices/auth-slice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
