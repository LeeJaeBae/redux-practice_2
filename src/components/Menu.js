import React from "react";
import { withRouter, NavLink } from "react-router-dom";

const Menu = () => {
  const activeStyle = {
    color: "green",
    fontSize: "1.2rem"
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeStyle={activeStyle}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/about/react" activeStyle={activeStyle}>
            Introduce React
          </NavLink>
        </li>
        <li>
          <NavLink to="/posts" activeStyle={activeStyle}>
            Post list
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
