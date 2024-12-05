import React from "react";
import "./NavBlock.css";

export const NavBlock = (props) => {
  return (
    <nav className="nav-block">
      <uuip-wc-navigation
        items={JSON.stringify(props.icons)}
      ></uuip-wc-navigation>
    </nav>
  );
};
