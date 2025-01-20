import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CatCard} from "@/shared/types/CatCard";

interface FavoriteCatsState {
  favoriteCats: CatCard[];
}

const initialState: FavoriteCatsState = {
  favoriteCats: [],
};

const favoriteCatsSlice = createSlice({
  name: 'favoriteCats',
  initialState,
  reducers: {
    addFavoriteCat: (state, action: PayloadAction<CatCard>) => {
      state.favoriteCats.push(action.payload);
    },
    removeFavoriteCat: (state, action: PayloadAction<string>) => {
      state.favoriteCats = state.favoriteCats.filter(cat => cat.id !== action.payload);
    },
  },
});

export const { addFavoriteCat, removeFavoriteCat } = favoriteCatsSlice.actions;
export const favoriteCatsReducer = favoriteCatsSlice.reducer;
