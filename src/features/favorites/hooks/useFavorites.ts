import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { addFavoriteCat, removeFavoriteCat } from "@/features/favorites/model/favoriteCatsSlice";
import { CatCard } from "@/shared/types/CatCard";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";

export const useFavorites = () => {
  const dispatch = useAppDispatch();

  const favoriteCats = useAppSelector((state) => state.favoriteCats.favoriteCats);

  const toggleFavorite = (cat: CatCard) => {
    const isFavorite = favoriteCats.some((favorite) => favorite.id === cat.id);
    if (isFavorite) {
      dispatch(removeFavoriteCat(cat.id));
    } else {
      dispatch(addFavoriteCat(cat));
    }
  };

  return { favoriteCats, toggleFavorite };
};
