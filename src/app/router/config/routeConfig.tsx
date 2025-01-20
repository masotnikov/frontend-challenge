import {Navigate, RouteProps} from "react-router-dom";
import {FavoritesPage} from "@/pages/FavoritesPage";
import {NotFoundPage} from "@/pages/NotFoundPage";
import {getRouteAllCats, getRouteFavorites} from "@/shared/const/router";
import {MainPage} from "@/pages/MainPage";


export const routeConfig: RouteProps[] = [
  {
    path: '/',
    element: <Navigate to={getRouteAllCats()} replace />
  },
  {
    path: getRouteAllCats(),
    element: <MainPage />,

  },
  {
    path: getRouteFavorites(),
    element: <FavoritesPage/>
  },
  {
    path: '*',
    element: <NotFoundPage/>
  },

]