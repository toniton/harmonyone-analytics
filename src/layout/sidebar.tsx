import React from "react";
import { MenuItem, SidebarComponent } from "../styles/layout";

export const Sidebar = () => {
  return (
    <SidebarComponent>
      <MenuItem href="/">Overview</MenuItem>
      <MenuItem href="/nft">NFT Marketplace</MenuItem>
    </SidebarComponent>
  );
};
