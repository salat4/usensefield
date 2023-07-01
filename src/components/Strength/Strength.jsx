import React from "react";
import s from "./Strength.module.css";
import ColorStripes from "../ColorStripes/ColorStripes";
function Strength({ color }) {
  const setBarColors = () => {
    if (color.strong) {
      return { bar1: "green", bar2: "green", bar3: "green" };
    } else if (color.middle) {
      return { bar1: "gray", bar2: "yellow", bar3: "yellow" };
    } else if (color.weak) {
      return { bar1: "gray", bar2: "gray", bar3: "red" };
    } else {
      return { bar1: "gray", bar2: "gray", bar3: "gray" };
    }
  };
  const barColors = setBarColors();

  return (
    <div className={s.box}>
      <ColorStripes color={barColors.bar1} />
      <ColorStripes color={barColors.bar2} />
      <ColorStripes color={barColors.bar3} />
    </div>
  );
}

export default Strength;
