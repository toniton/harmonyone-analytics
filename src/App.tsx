import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ConfigProvider } from "./config/provider";
import { routes } from "./routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <ConfigProvider>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/overview" />
            </Route>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                exact={route.exact}
                render={(props: any) => <route.component {...props} />}
              />
            ))}
          </Switch>
        </Router>
      </Suspense>
    </ConfigProvider>
  );
};

export default React.memo(App);
