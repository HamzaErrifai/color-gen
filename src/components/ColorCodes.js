import React from "react";
import { useParams } from "react-router-dom";

/**
 * parses the string to
 * @param {String} strColors
 * @returns {Array}
 */
const parseBgColors = (strColors) => {
  let colors = [];
  colors = strColors.split("-");
  colors = colors.map((elm) => "#" + elm);
  return colors;
};

/**
 * returns white or black de pending on the passed color
 * @param {String} color
 * @returns {String}
 */
const getColor = (color) => {
  if (color.length === 7) {
    const r = "0x" + color[1] + color[2];
    const g = "0x" + color[3] + color[4];
    const b = "0x" + color[5] + color[6];

    if (r * 0.299 + g * 0.587 + b * 0.114 > 186) return "#000000";
    return "#ffffff";
  }
  return "#000000";
};

function ColorCodes() {
  let { colors } = useParams();
  let parsedColors = parseBgColors(colors);

  return (
    <div className="d-inline-sm-flex d-md-flex">
      {parsedColors.map((elm, key) => (
        <div
          className="text-center p-2"
          key={key}
          style={{ backgroundColor: elm, color: getColor(elm) }}
        >
          <span className="colorCode">{elm}</span>
        </div>
      ))}
    </div>
  );
}

export default ColorCodes;
