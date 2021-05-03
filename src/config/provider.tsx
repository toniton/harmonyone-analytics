import React from "react";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "../shared/hooks/localstorage";
import { ConfigContext } from "./context";
import { getTheme, THEME_OPTIONS } from "./theme";
export const ConfigProvider = ({ children, options }: any): JSX.Element => {
  const [savedMode, setSavedMode] = useLocalStorage<THEME_OPTIONS>("mode");
  const settings = {
    savedMode:
      savedMode === THEME_OPTIONS.DARK
        ? THEME_OPTIONS.DARK
        : THEME_OPTIONS.LIGHT,
    setSavedMode,
  };

  return (
    <ConfigContext.Provider value={settings}>
      <ThemeProvider theme={getTheme(settings.savedMode)}>
        {children}
      </ThemeProvider>
    </ConfigContext.Provider>
  );
};
