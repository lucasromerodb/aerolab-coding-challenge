import { darken } from "polished";

const black = "#000";
const white = "#fff";
const base = "#ebebeb";
const baseAlt = darken(0.12, base);
const primary = "#37a5ff";
const secondary = "#ff3770";

export const Vars = {
  color: {
    black: black,
    white: white,
    base: {
      base: base,
      alt: baseAlt
    },
    primary: primary,
    secondary: secondary
  },
  fontFamily: `"Montserrat", sans-serif`,
  radius: {
    md: "15px",
    sm: "10px"
  }
};
