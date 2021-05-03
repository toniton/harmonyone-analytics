import reactCSS from "reactcss";
import Color from "color";

export enum THEME_OPTIONS {
  LIGHT = "light",
  DARK = "dark",
}

const pallete = {
  white: "#FFFFFF",
  electricblue: "#00AEE9",
  mintgreen: "#69FABD",
  midnightblue: "#1B295E",
  coolgray: "#758796",
};

export const getTheme = (theme: THEME_OPTIONS) => {
  const themecolor =
    theme === THEME_OPTIONS.LIGHT
      ? {
          background: pallete.white,
          foreground: pallete.coolgray,
        }
      : {
          background: pallete.midnightblue,
          foreground: pallete.white,
        };

  return reactCSS({
    default: {
      button: {
        background: themecolor.background,
        borderColor: themecolor.background,
        color: themecolor.foreground,
      },
      body: {
        background: themecolor.background,
      },
      links: {
        color: new Color(themecolor.foreground).darken(0.15),
      },
      menu: {
        color: new Color(themecolor.foreground).darken(0.15),
      },
      headings: {
        color: new Color(themecolor.foreground).darken(0.5),
      },
      navbar: {
        borderBottom: `3px solid ${new Color(themecolor.foreground).fade(0.2)}`,
        borderColor: new Color(themecolor.foreground).fade(0.8),
      },
      typography: {
        color: new Color(themecolor.foreground).darken(0.5),
      },
    },
    active: {
      button: {
        background: themecolor.background,
        borderColor: themecolor.foreground,
        color: themecolor.foreground,
      },
      body: {
        background: themecolor.background,
      },
      links: {
        color: new Color(themecolor.foreground).darken(0.15),
      },
      menu: {
        color: new Color(themecolor.foreground).darken(0.15),
      },
      headings: {
        color: new Color(themecolor.foreground).darken(0.5),
      },
      navbar: {
        borderBottom: `3px solid ${new Color(themecolor.foreground).fade(0.2)}`,
        borderColor: new Color(themecolor.foreground).fade(0.2),
      },
      typography: {
        color: new Color(themecolor.foreground).darken(0.75),
      },
    },
  });
};
