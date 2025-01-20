import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api/baseApi';
// import { favoriteCatsReducer } from 'entities/cat/model/favoriteCatsSlice';
import { Provider } from 'react-redux';
import React, { FC, ReactNode } from 'react';
import {favoriteCatsReducer} from "@/features/favorites/model/favoriteCatsSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    favoriteCats: favoriteCatsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
