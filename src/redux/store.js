import { configureStore } from '@reduxjs/toolkit';
import { wearApi } from './wearApi';

export const store = configureStore({
  reducer: {
    [wearApi.reducerPath]: wearApi.reducer
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(wearApi.middleware)
})