import {FC} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./FavoritesPage.module.scss";

interface FavoritesPageProps  {
    className?: string;
}

const FavoritesPage: FC<FavoritesPageProps> = (props) => {
   const {className} = props;

    return (
      <div className={classNames(cls.FavoritesPage, {}, [className])}>
        <h2>FAVORITES PAGE</h2>
      </div>
    );
};

export default FavoritesPage;

