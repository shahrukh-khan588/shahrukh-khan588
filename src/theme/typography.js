import palette from "./palette"

export default {
  fontFamily: '"Montserrat", sans-serif',
  fontStyle: "normal",
  fontWeight: "normal",
  color: palette.primary.label,

  h1: {
    // Display Small Bold (32px, Bold)
    fontFamily: "Volkhov",
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "38px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "bold",
  },
  h2: {
    // LinkLargeMedium: {
    fontFamily: "ITC Avant Garde Gothic Std Demi",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "38px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Demi",
  },
  h3: {
    // LinkSemiMedium
    fontFamily: "ITC Avant Garde Gothic Std Bold",
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "30px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Bold",
  },
  h4: {
    // LinkMedium
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Bold",
  },
  h5: {
    // LinkSmall
    fontFamily: "ITC Avant Garde Gothic Std Demi",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "28px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Demi",
  },
  caption: {
    // LinkXS
    fontFamily: "ITC Avant Garde Gothic Std Demi",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "22px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Demi",
  },

  h6: {
    // TextL
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "38px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Regular",
  },
  body1: {
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "26px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Regular",
  },
  body2: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "28px",
    letterSpacing: "0.75px",
    color: palette.white,
    fontStyle: "normal",
  },
  subtitle1: {
    // text small
    fontFamily: "ITC Avant Garde Gothic Std Book",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Book",
  },
  subtitle2: {
    // text extra small
    fontFamily: "ITC Avant Garde Gothic Std Book",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.75px",
    color: palette.primary.label,
    fontStyle: "Book",
    display: "inline",
  },
  variantMapping: {
    subtitle1: "p",
    subtitle2: "p",
  },
}
