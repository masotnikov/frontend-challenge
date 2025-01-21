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
      <nav className={classNames(cls.AppLink, {}, [className])}>
        <li>
          <NavLink
            to={getRouteAllCats()}
            className={({isActive}) =>
              classNames(cls.link, {[cls.active]: isActive})
            }
          >
            Все котики
          </NavLink>
        </li>
        <NavLink
          to={getRouteFavorites()}
          className={({isActive}) =>
            classNames(cls.link, {[cls.active]: isActive})
          }
        >
          Любимые котики
        </NavLink>
      </nav>
    );
};

