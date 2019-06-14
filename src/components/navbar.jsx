import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h2 className="logo">
        <a href="#">Oscars 2019</a>
      </h2>
      <ul className="nav-menu">
        <li>
          <a className="nav-menu__link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-menu__link" href="#">
            Best Actor
          </a>
        </li>
        <li>
          <a className="nav-menu__link" href="#">
            Best Actress
          </a>
        </li>
        <li>
          <a className="nav-menu__link" href="#">
            Best Films
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
