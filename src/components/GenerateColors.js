import React from "react";
import { Redirect } from "react-router-dom";

/**
 *
 * @returns {String} String of colors
 */
const getColorStr = () => {
  const possibleChars = "123456789abcdef";
  let colorStr = "";
  const maxColors = 7;

  for (let j = 0; j < maxColors; j++) {
    for (let i = 0; i < 6; i++) {
      colorStr = colorStr.concat(
        possibleChars[Math.floor(Math.random() * possibleChars.length)]
      );
    }
    if (j < maxColors - 1) colorStr = colorStr.concat("-");
  }
  return colorStr;
};

function GenerateColors() {
  const colorStr = getColorStr();
  return <Redirect to={`/${colorStr}`} />;
}

export default GenerateColors;
