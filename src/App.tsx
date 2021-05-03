import React from "react";
import { AnalyticsPage } from "./pages/analytics";
import { ConfigProvider } from "./config/provider";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <ConfigProvider>
      <GlobalStyle />
      <AnalyticsPage />
    </ConfigProvider>
  );
};

export default App;
