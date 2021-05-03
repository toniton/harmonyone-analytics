import React, { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { OverviewComponent } from "../components/overview";
import { NFTMarketplacePage } from "./nftmarketplace";
import { MainLayout } from "../layout/main";

export const AnalyticsPage = () => {
  const themeContext = useContext(ThemeContext);
  useEffect(() => console.log("Current theme: ", themeContext), [themeContext]);
  return (
    <MainLayout>
      <OverviewComponent />
      <NFTMarketplacePage />
    </MainLayout>
  );
};
