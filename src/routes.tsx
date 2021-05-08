import { lazy } from "react";

const OverviewPage = lazy(() => import("./pages/overview"));
const NFTMarketplacePage = lazy(() => import("./pages/nftmarketplace"));

export const routes: any[] = [
  {
    name: "Overview",
    key: "overview",
    path: "/overview",
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
