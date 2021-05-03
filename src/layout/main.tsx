import React from "react";
import styled from "styled-components";
import { BackgroundComponent, Content, Sidebar } from "../styles/layout";
import { Header } from "./header";

const LayoutBackground = styled(BackgroundComponent)`
  padding-top: 86px;
`;

export const MainLayout = (props: any) => {
  const { children } = props;

  return (
    <LayoutBackground>
      <Header />
      <Content>
        <Sidebar />
        {children}
      </Content>
    </LayoutBackground>
  );
};
