import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = props => {
  return (
    <nav>
      <h2 className="logo">
        <a href="#">{props.title}</a>
      </h2>
      <ul className="nav-menu">
        <li>
          <NavLink className="nav-menu__link" exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/actors">
            Best Actor
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/actress">
            Best Actress
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/movies">
            Best Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
