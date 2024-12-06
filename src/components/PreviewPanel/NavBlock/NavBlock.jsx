import React from "react";
import "./NavBlock.css";
import DisableClick from "../../DisableClick/DisableClick";

export const NavBlock = (props) => {
  return (
    <nav className="nav-block">
      <DisableClick layoutKey={"nav-block"} />
      <uuip-wc-navigation
        items={JSON.stringify(props.icons)}
      ></uuip-wc-navigation>
    </nav>
  );
};
