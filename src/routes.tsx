import { lazy } from "react";

const OverviewPage = lazy(() => import("./pages/overview"));
const DAppsPage = lazy(() => import("./pages/dapps"));
const MarketplacePage = lazy(() => import("./pages/marketplace"));
const ExchangePage = lazy(() => import("./pages/exchange"));
const SocialsPage = lazy(() => import("./pages/socials"));

export const routes: any[] = [
  {
    name: "Overview",
    key: "overview",
    path: "/overview",
    exact: true,
    component: OverviewPage,
  },
  {
    name: "DApps",
    key: "dapps",
    path: "/dapps",
    component: DAppsPage,
  },
  {
    name: "Marketplace",
    key: "marketplace",
    path: "/marketplace",
    component: MarketplacePage,
  },
  {
    name: "Exchange",
    key: "exchange",
    path: "/exchange",
    component: ExchangePage,
  },
  {
    name: "Socials",
    key: "socials",
    path: "/socials",
    component: SocialsPage,
  },
];
