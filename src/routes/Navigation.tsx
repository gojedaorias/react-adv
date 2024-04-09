import { Suspense } from "react";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ path, to, name }) => (
                <li key={path}>
                  <NavLink to={to} activeClassName="active">
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={`/${path}`}>
                <Component />
              </Route>
            ))}
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
