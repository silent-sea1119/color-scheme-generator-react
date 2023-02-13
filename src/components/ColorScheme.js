import Color from "./Color.js";
import "./ColorScheme.css";

import { nanoid } from "nanoid";

function ColorScheme({ schemeColors }) {
  const colorScheme = schemeColors.map((color) => (
    <Color color={color} key={nanoid()} />
  ));
  return <section className="color-scheme">{colorScheme}</section>;
}

export default ColorScheme;
