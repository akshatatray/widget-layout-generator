import React from 'react';
import './NavBlock.scss';

interface IconDetail {
  name: string;
  iconClass: string;
}

interface NavBlockProps {
  title: string;
  icons: IconDetail[];
}

export const NavBlock: React.FC<NavBlockProps> = (props) => {
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
