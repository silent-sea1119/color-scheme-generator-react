import Color from "./Color.js";
import "./ColorScheme.css";

function ColorScheme({
  schemeColors,
  handleCopyHexClick,
}) {
  const colorScheme = schemeColors.map((color, index) => (
    <Color
      color={color}
      key={index}
      handleCopyHexClick={handleCopyHexClick}
    />
  ));
  return <section className="color-scheme">{colorScheme}</section>;
}

export default ColorScheme;
