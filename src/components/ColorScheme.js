import Color from "./Color.js";
import "./ColorScheme.css";

function ColorScheme({ schemeColors}) {

  const colorScheme = schemeColors.map((color, index) => (
    <Color color={color} key={index} />
  ));
  return <section className="color-scheme">{colorScheme}</section>;
}

export default ColorScheme;
