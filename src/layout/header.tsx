import React, { useContext } from "react";
import { ConfigContext } from "../config/context";
import { THEME_OPTIONS } from "../config/theme";
import {
  LogoComponent,
  NavComponent,
  ThemeModeComponent,
  ThemeModeLabel,
} from "../styles/layout";

export const Header = () => {
  const configContext = useContext(ConfigContext);

  const onToggleClick = (event: any) => {
    console.log(event?.target?.checked);
    const mode = event?.target?.checked
      ? THEME_OPTIONS.LIGHT
      : THEME_OPTIONS.DARK;
    configContext.setSavedMode(mode);
  };
  return (
    <NavComponent>
      <LogoComponent alt="logo" />
      <ThemeModeLabel onChange={onToggleClick}>
        <ThemeModeComponent />
        Mode
      </ThemeModeLabel>
    </NavComponent>
  );
};
