import React from "react";
import { MenuItem, SidebarComponent } from "../styles/layout";

export const Sidebar = () => {
  return (
    <SidebarComponent>
      <MenuItem to="/">Overview</MenuItem>
      <MenuItem to="/socials">Socials</MenuItem>
      <MenuItem to="/dapps">DApps</MenuItem>
      <MenuItem to="/nft">NFT Marketplace</MenuItem>
      <MenuItem to="/staking">Staking</MenuItem>
    </SidebarComponent>
  );
};
