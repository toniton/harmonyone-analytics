import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { MainLayout } from "../layout/main";
import logo from "../logo.svg";

export const AnalyticsPage = () => {
  const themeContext = useContext(ThemeContext);
  useEffect(() => console.log("Current theme: ", themeContext), [themeContext]);
  return (
    <MainLayout>
      <label htmlFor="cheese-status">Adjacent label tag</label>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </MainLayout>
  );
};
