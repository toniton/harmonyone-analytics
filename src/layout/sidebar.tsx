import React from "react";
import { MenuItem, SidebarComponent } from "../styles/layout";

export const Sidebar = () => {
  return (
    <SidebarComponent>
      <MenuItem to="/">Overview</MenuItem>
      <MenuItem to="/socials">Socials</MenuItem>
      <MenuItem to="/dapps">DApps</MenuItem>
      <MenuItem to="/marketplace">Marketplace</MenuItem>
      <MenuItem to="/exchange">Exchange</MenuItem>
      <MenuItem to="/staking">Staking</MenuItem>
    </SidebarComponent>
  );
};
