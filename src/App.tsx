import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConfigProvider } from "./config/provider";
import { routes } from "./routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <ConfigProvider>
      <GlobalStyle />
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              render={(props: any) => <route.component {...props} />}
            />
          ))}
        </Switch>
      </Router>
    </ConfigProvider>
  );
};

export default App;
