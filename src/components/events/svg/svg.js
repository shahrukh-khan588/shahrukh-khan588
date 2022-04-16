import React from "react";
import useStyles from "../styles";

function Svg() {
  const classes = useStyles();
  return (
    <div>
      <svg
        className={classes.svg}
        width="878"
        height="918"
        viewBox="0 0 878 918"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <ellipse
          cx="439.437"
          cy="459.335"
          rx="438.451"
          ry="458.448"
          fill="url(#paint0_radial)"
        ></ellipse>{" "}
        <defs>
          {" "}
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(341 480.267) rotate(15.989) scale(432.741 930.261)"
          >
            {" "}
            <stop stop-color="#5E1DE8" stop-opacity="0.18"></stop>{" "}
            <stop offset="1" stop-color="#319BD7" stop-opacity="0"></stop>{" "}
          </radialGradient>{" "}
        </defs>{" "}
      </svg>
    </div>
  );
}

export default Svg;
