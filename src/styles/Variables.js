import { darken } from "polished";

const black = "#000";
const white = "#fff";
const base = "#ebebeb";
const baseAlt = darken(0.2, base);
const primary = "#37a5ff";
const secondary = "#ff3770";
const success = "#04cc47";
const aeropayPrimary = "#708AFB";
const aeropaySecondary = "#7A76FE";

export const Vars = {
  color: {
    black,
    white,
    base: {
      base,
      alt: baseAlt
    },
    primary,
    secondary,
    success,
    aeropay: {
      aeropayPrimary,
      aeropaySecondary
    }
  },
  fontFamily: `"Montserrat", sans-serif`,
  radius: {
    md: "15px",
    sm: "10px"
  }
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1280px",
  desktop: "2560px"
};

export const Device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
