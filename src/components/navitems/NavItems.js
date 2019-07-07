import React from "react";
import { Link } from "react-router-dom";

import { NavLinks } from "./Styles";

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
          GitHub »
        </a>
      </li>
      <li>
        <Link to="/" className="itemNav">
          Products
        </Link>
      </li>
      <li>
        <Link to="/history" className="itemNav">
          Redeem History
        </Link>
      </li>
    </NavLinks>
  );
}
export default NavItems;
