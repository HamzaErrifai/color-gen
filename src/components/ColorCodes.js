import React from "react";
import { useParams } from "react-router-dom";

/**
 * parses the string to
 * @param {String} strColors
 * @returns {Array}
 */
const parseColors = (strColors) => {
  let colors = [];
  colors = strColors.split("-");
  colors = colors.map((elm) => "#" + elm);
  return colors;
};

function ColorCodes() {
  let { colors } = useParams();
  let parsedColors = parseColors(colors);
  

  return parsedColors.map((elm, key) => (
    <div
      className="d-sm-block d-lg-inline text-center p-4"
      key={key}
      style={{ backgroundColor: elm }}
      
    >
      <span className="colorCode">{elm}</span>
    </div>
  ));
}

export default ColorCodes;
