import Color from "../Color/Color.js";
import "./ColorScheme.css";

function ColorScheme({ schemeColors, handleCopyHexClick }) {
  // Maps over scheme colors stored in state and renders individual color components
  const colorScheme = schemeColors.map((color, index) => (
    <Color color={color} key={index} handleCopyHexClick={handleCopyHexClick} />
  ));
  return <section className="color-scheme">{colorScheme}</section>;
}

export default ColorScheme;
