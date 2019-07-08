import React from "react";
import { Link } from "react-router-dom";

import { NavLinks } from "./Styles";
import { Github } from "styled-icons/boxicons-logos/Github";
import { History } from "styled-icons/boxicons-regular/History";
import { Grid } from "styled-icons/boxicons-solid/Grid";

function NavItems() {
  return (
    <NavLinks>
      <li>
        <a
          href="https://github.com/lucasromerodb/aerolab-coding-challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="itemNav"
        >
          <span className="navText">GitHub »</span>
          <Github className="navIcon" />
        </a>
      </li>
      <li>
        <Link to="/" className="itemNav">
          <span className="navText">Products</span>
          <Grid className="navIcon" />
        </Link>
      </li>
      <li>
        <Link to="/history" className="itemNav">
          <span className="navText">Redeem History</span>
          <History className="navIcon" />
        </Link>
      </li>
    </NavLinks>
  );
}
export default NavItems;
