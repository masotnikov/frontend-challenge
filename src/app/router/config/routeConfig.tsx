import {RouteProps} from "react-router-dom";
import {MainPage} from "@/pages/MainPage";
import {FavoritesPage} from "@/pages/FavoritesPage";
import {NotFoundPage} from "@/pages/NotFoundPage";


export const routeConfig: RouteProps[] = [
  {
    path: '/all-cats',
    element: <MainPage/>
  },
  {
    path: '/favorites',
    element: <FavoritesPage/>
  },
  {
    path: '*',
    element: <NotFoundPage/>
  },

]