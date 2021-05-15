import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { THEME_OPTIONS } from "../config/theme";
import { ConfigContext } from "../config/context";

const ThemeSwitchWrapper = styled.label`
  position: relative;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 38px;
  height: 14px;
`;

const Checkbox = styled.input.attrs(() => ({ type: "checkbox" }))`
  display: none;
`;

const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: #344658;
  border: 1px solid #192837;
  margin: 0 4px;

  &:before {
    background-color: #2697ed;
    position: absolute;
    content: "";
    height: 11px;
    width: 11px;
    left: 2px;
    bottom: 1px;
    border-radius: 50%;
    transition: transform 0.5s;
  }

  ${Checkbox}:checked + &:before {
    transform: translateX(15px);
  }
`;

export const ThemeSwitcherComponent = () => {
  const configContext = useContext(ConfigContext);

  const onToggleClick = (event: any) => {
    console.log(event?.target?.checked);
    const mode = event?.target?.checked
      ? THEME_OPTIONS.DARK
      : THEME_OPTIONS.LIGHT;
    configContext.setSavedMode(mode);
  };

  return (
    <ThemeSwitchWrapper>
      <FontAwesomeIcon icon={faSun} />
      <Switch>
        <Checkbox
          onChange={onToggleClick}
          checked={configContext.savedMode === THEME_OPTIONS.DARK}
        />
        <Slider />
      </Switch>
      <FontAwesomeIcon icon={faMoon} />
    </ThemeSwitchWrapper>
  );
};
