import { configureStore } from "@reduxjs/toolkit";
import { swApi } from './services/api';
export const store = configureStore({
  reducer: {
    [swApi.reducerPath]: swApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
