import {FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import {CatItem} from "@/entities/cat";
import {useFavorites} from "@/features/favorites/hooks/useFavorites";
import cls from "./FavoritesPage.module.scss";

interface FavoritesPageProps {
  className?: string;
}

const FavoritesPage: FC<FavoritesPageProps> = (props) => {
  const {className} = props;
  const {favoriteCats} = useFavorites(); // Получаем избранных котиков

  if (favoriteCats.length === 0) {
    return (
      <div className={classNames(cls.FavoritesPage, {}, [className])}>
        <p>Список избранных котиков пока пуст.</p>
      </div>
    );
  }

  return (
    <div className={classNames(cls.FavoritesPage, {}, [className])}>
      <ul className={cls.catsList}>
        {favoriteCats.map((cat) => (
          <li key={cat.id}>
            <CatItem cat={cat}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
