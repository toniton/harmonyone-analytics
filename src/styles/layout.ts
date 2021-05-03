import styled from "styled-components";
import logo from "../logo.svg";
import logoDark from "../logo-dark.svg";
import { THEME_OPTIONS } from "../config/theme";

export const BackgroundComponent = styled.div`
  background: ${(props) => props.theme.body.background};
  color: ${(props) => props.theme.typography.color};
`;

export const NavComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.typography.color};
  height: 56px;
  padding: 8px 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.navbar.borderColor};
  z-index: 1;
`;

export const LogoComponent = styled.img<{ mode: THEME_OPTIONS }>`
  content: url(${(props) =>
    props.mode === THEME_OPTIONS.LIGHT ? logo : logoDark});
  height: 24px;
  margin: auto 0;
`;

export const ThemeModeLabel = styled.label`
  display: block;
  padding-right: 10px;
  padding-left: 22px;
  text-indent: -22px;
`;

export const ThemeModeComponent = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  margin-right: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  padding-left: 280px;
`;

export const Sidebar = styled.div`
  display: flex;
  width: 100%;
  max-width: 280px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  height: 100%;
  background: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.typography.color};
  border-right: 1px solid ${(props) => props.theme.navbar.borderColor};
`;
