import React from "react";
import { useSelector } from 'react-redux';
import DisableClick from "../../DisableClick/DisableClick";
import "./NavBlock.css";

export const NavBlock = (props) => {
  const navBarLayout = useSelector((state) => state.navBarLayout);
  return (
    <nav className="nav-block">
      <DisableClick layoutKey={"nav-block"} />
      <uuip-wc-navigation
        items={JSON.stringify(navBarLayout)}
      ></uuip-wc-navigation>
    </nav>
  );
};
