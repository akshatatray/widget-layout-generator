import React from 'react';
import './NavBlock.css';


export const NavBlock = (props) => {
    return  (
        <nav className="nav-block">
          <ul>
            {props.icons.map((icon, index) => (
              <li key={index}><i className={`icon ${icon.iconClass}`}></i></li>
            ))}
          </ul>
        </nav>
      );
}
