import { Route, Routes } from "react-router-dom";

const RenderRoutes = ({
  routes = [
    {
      path: "/",
      element: () => <></>,
    },
  ],
}) => (
  <Routes>
    {routes.map((route, routeIdx) => (
      <Route path={route.path} key={routeIdx} element={route.element}/>
    ))}
  </Routes>
);
export default RenderRoutes