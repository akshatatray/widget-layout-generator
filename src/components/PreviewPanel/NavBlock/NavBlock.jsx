import React from "react";
import { useSelector } from 'react-redux';
import DisableClick from "../../DisableClick/DisableClick";
import "./NavBlock.css";

export const NavBlock = (props) => {
  const navBarLayout = useSelector((state) => state.navBarLayout);
  const selectedScreen = useSelector((state) => state.selectedScreen);

  return (
    <nav className="nav-block">
      <DisableClick layoutKey={"nav-block"} />
      <uuip-wc-navigation
        items={JSON.stringify(navBarLayout)}
        selectedNavigateTo={selectedScreen}
      ></uuip-wc-navigation>
    </nav>
  );
};
