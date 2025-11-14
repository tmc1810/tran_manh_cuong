import { Route } from 'react-router-dom';

export default function RenderRoutes(routes) {
  return routes.map(({ path, element, children }, i) => (
    <Route key={i} path={path} element={element}>
      {children && RenderRoutes(children)}
    </Route>
  ));
}
