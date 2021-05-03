import styled from "styled-components";
import logo from "../logo.svg";

export const BackgroundComponent = styled.div`
  background: ${(props) => props.theme.body.background};
  color: ${(props) => props.theme.typography.color};
`;

export const NavComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.body.background};
  color: ${(props) => props.theme.typography.color};
  height: 120px;
  padding: 8px 30px;
  border-bottom: 1px solid ${(props) => props.theme.navbar.borderColor};
`;

export const LogoComponent = styled.img`
  content: url(${logo});
  height: 38px;
  margin: auto 0;
`;

export const ThemeModeLabel = styled.label``;

export const ThemeModeComponent = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  content: url(${logo});
  height: 38px;
  margin: auto 0;
`;
