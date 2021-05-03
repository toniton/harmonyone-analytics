import reactCSS from "reactcss";
import Color from "color";

export enum THEME_OPTIONS {
  LIGHT = "light",
  DARK = "dark",
}

const pallete = {
  white: "#FFFFFF",
  lightgray: "#F3F3F3",
  electricblue: "#00AEE9",
  mintgreen: "#69FABD",
  midnightblue: "#1B295E",
  coolgray: "#758796",
};

export const getTheme = (theme: THEME_OPTIONS) => {
  const themecolor =
    theme === THEME_OPTIONS.LIGHT
      ? {
          background: pallete.lightgray,
          foreground: pallete.coolgray,
        }
      : {
          background: pallete.midnightblue,
          foreground: pallete.white,
        };

  return reactCSS({
    default: {
      mode: theme,
      button: {
        background: themecolor.background,
        borderColor: themecolor.background,
        color: themecolor.foreground,
      },
      body: {
        background: themecolor.background,
      },
      badge: {
        background: new Color(pallete.electricblue).darken(0.15),
        color: new Color(pallete.white),
      },
      links: {
        color: new Color(pallete.electricblue).darken(0.15),
      },
      menu: {
        color: new Color(themecolor.foreground).darken(0.15),
      },
      headings: {
        color: new Color(themecolor.foreground).darken(0.5),
      },
      navbar: {
        background: new Color(themecolor.background).isLight()
          ? pallete.white
          : themecolor.background,
        borderBottom: `3px solid ${new Color(themecolor.foreground).fade(0.2)}`,
        borderColor: new Color(themecolor.foreground).fade(0.9),
      },
      card: {
        background: new Color(themecolor.background).isLight()
          ? pallete.white
          : new Color(themecolor.background).lighten(0.25),
        featBackground: new Color(themecolor.background).isLight()
          ? new Color("#FAFBFC")
          : new Color(pallete.coolgray).fade(0.85),
      },
      typography: {
        color: new Color(themecolor.foreground).darken(0.15),
        secondary: new Color(themecolor.foreground).lighten(0.35),
      },
      graph: {
        lineColor:
          theme === THEME_OPTIONS.LIGHT
            ? pallete.electricblue
            : pallete.mintgreen,
        textolor: new Color(themecolor.foreground).darken(0.35).hex(),
      },
    },
    active: {
      mode: theme,
      button: {
        background: themecolor.background,
        borderColor: themecolor.foreground,
        color: themecolor.foreground,
      },
      body: {
        background: themecolor.background,
      },
      badge: {
        background: new Color(pallete.electricblue).darken(0.15),
        color: new Color(pallete.electricblue),
      },
      links: {
        color: new Color(pallete.electricblue).darken(0.15),
      },
      menu: {
        color: new Color(themecolor.foreground).darken(0.15),
      },
      headings: {
        color: new Color(themecolor.foreground).darken(0.5),
      },
      navbar: {
        background: new Color(themecolor.background).isLight()
          ? pallete.white
          : themecolor.background,
        borderBottom: `3px solid ${new Color(themecolor.foreground).fade(0.2)}`,
        borderColor: new Color(themecolor.foreground).fade(0.2),
      },
      card: {
        background: new Color(themecolor.background).isLight()
          ? pallete.white
          : new Color(themecolor.background).lighten(0.25),
        featBackground: new Color(themecolor.background).isLight()
          ? new Color("#FAFBFC")
          : "#FAFBFC",
      },
      typography: {
        color: new Color(themecolor.foreground).darken(0.35),
        secondary: new Color(themecolor.foreground).lighten(0.35),
      },
      graph: {
        lineColor:
          theme === THEME_OPTIONS.LIGHT
            ? pallete.electricblue
            : pallete.mintgreen,
        textolor: new Color(themecolor.foreground).darken(0.35).hex(),
      },
    },
  });
};
