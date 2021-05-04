import styled from "styled-components";
import logo from "../logo.svg";
import logoDark from "../logo-dark.svg";
import { THEME_OPTIONS } from "../config/theme";
import { Link } from "react-router-dom";

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
  z-index: 9999;
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
  flex-direction: column;
  padding-left: 280px;
  padding-bottom: 60px;
`;

export const SidebarComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  position: fixed;
  padding-top: 100px;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  height: 100%;
  background: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.typography.color};
  border-right: 1px solid ${(props) => props.theme.navbar.borderColor};
`;

export const MenuItem = styled(Link)`
  width: 100%;
  display: block;
  padding: 15px 30px;
  text-align: left;
  border: none;
  white-space: normal;
  float: none;
  outline: 0;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: ${(props) => props.theme.links.color};
  :hover {
    color: ${(props) => props.theme.links.hover};
    background: ${(props) => props.theme.links.hoverBg};
  }
`;
