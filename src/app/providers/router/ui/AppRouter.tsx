import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "shared/config/routerConfig/routerConfig";

const AppRouter = () => {
  return (
    <div>
      <Suspense fallback="">
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;