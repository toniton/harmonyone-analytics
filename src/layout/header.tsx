import React, { useContext } from "react";
import { ThemeSwitcherComponent } from "../components/theme-switcher";
import { ConfigContext } from "../config/context";
import { LogoComponent, NavComponent } from "../styles/layout";

export const Header = () => {
  const configContext = useContext(ConfigContext);

  return (
    <NavComponent>
      <LogoComponent alt="logo" mode={configContext.savedMode} />
      <ThemeSwitcherComponent />
    </NavComponent>
  );
};
