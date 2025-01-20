import {FC} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import {NavLink} from "react-router-dom";
import {getRouteAllCats, getRouteFavorites} from "@/shared/const/router";

interface AppLinkProps  {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
   const {className} = props;

    return (
      <div className={classNames(cls.AppLink, {}, [className])}>
        <NavLink
          to={getRouteAllCats()}
          className={({isActive}) =>
            classNames(cls.link, {[cls.active]: isActive})
          }
        >
          Все котики
        </NavLink>
        <NavLink
          to={getRouteFavorites()}
          className={({isActive}) =>
            classNames(cls.link, {[cls.active]: isActive})
          }
        >
          Любимые котики
        </NavLink>
      </div>
    );
};

