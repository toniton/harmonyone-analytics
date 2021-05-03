import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { ConfigContext } from "../config/context";
import { THEME_OPTIONS } from "../config/theme";
import { BackgroundComponent } from "../styles/layout";
import { Header } from "./header";

export const MainLayout = (props: any) => {
  const { children } = props;
  const themeContext = useContext(ThemeContext);
  const configContext = useContext(ConfigContext);
  useEffect(() => console.log("Current theme: ", themeContext), [themeContext]);
  useEffect(() => console.log("Current theme: ", configContext), [
    configContext,
  ]);
  //   configContext.setSavedMode(THEME_OPTIONS.DARK);
  return (
    <BackgroundComponent>
      <Header />
      {children}
    </BackgroundComponent>
  );
};
