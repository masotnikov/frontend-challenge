import { FC } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { CatItem } from "@/entities/cat";
import { useFavorites } from "@/features/favorites/hooks/useFavorites";
import cls from "./FavoritesPage.module.scss";

interface FavoritesPageProps {
  className?: string;
}

const FavoritesPage: FC<FavoritesPageProps> = (props) => {
  const { className } = props;
  const { favoriteCats } = useFavorites(); // Получаем избранных котиков

  if (favoriteCats.length === 0) {
    return (
      <div className={classNames(cls.FavoritesPage, {}, [className])}>
        <h2>Избранные котики</h2>
        <p>Список избранных котиков пока пуст.</p>
      </div>
    );
  }

  return (
    <div className={classNames(cls.FavoritesPage, {}, [className])}>
      <h2>Избранные котики</h2>
      <div className={cls.catsList}>
        {favoriteCats.map((cat) => (
          <CatItem key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
