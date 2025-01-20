import {FC, Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "@/app/router/config/routeConfig";


interface AppRouterProps {
  className?: string;
}

export const AppRouter: FC<AppRouterProps> = (props) => {

  return (
    <Suspense fallback={<h1>...Loading</h1>}>
      <Routes>
        {routeConfig.map(({path, element}) => (
          <Route
            key={path || 'not found'}
            path={path}
            element={(
              <div className="container">
                {element}
              </div>
            )}
          >
          </Route>
        ))}
      </Routes>
    </Suspense>

  );
};

