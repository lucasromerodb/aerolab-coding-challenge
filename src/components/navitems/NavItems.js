import React from "react";
import { NavLink } from "react-router-dom";

import { NavLinks } from "./Styles";
import { Github } from "styled-icons/boxicons-logos/Github";
import { History } from "styled-icons/boxicons-regular/History";
import { Grid } from "styled-icons/boxicons-solid/Grid";

function NavItems() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <NavLinks>
      <li>
        <a
          href="https://github.com/lucasromerodb/aerolab-coding-challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="navText">GitHub »</span>
          <Github className="navIcon" />
        </a>
      </li>
      <li>
        <NavLink
          exact
          to="/"
          onClick={scrollTop}
          className="navLink"
          activeClassName="activeNavLink"
        >
          <span className="navText">Products</span>
          <Grid className="navIcon" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/history"
          onClick={scrollTop}
          className="navLink"
          activeClassName="activeNavLink"
        >
          <span className="navText">Redeem History</span>
          <History className="navIcon" />
        </NavLink>
      </li>
    </NavLinks>
  );
}
export default NavItems;
