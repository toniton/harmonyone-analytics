import { lazy } from "react";
import NFTMarketplacePage from "./pages/nftmarketplace";
import OverviewPage from "./pages/overview";

// const OverviewPage = lazy(() => import("./pages/overview"));
// const NFTMarketplacePage = lazy(() => import("./pages/nftmarketplace"));

export const routes: any[] = [
  {
    name: "Overview",
    key: "overview",
    path: "/",
    exact: true,
    component: OverviewPage,
  },
  {
    name: "NFT",
    key: "nftmarketplace",
    path: "/nft",
    component: NFTMarketplacePage,
  },
];
