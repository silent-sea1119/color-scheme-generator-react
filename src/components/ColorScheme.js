import Color from "./Color.js";
import "./ColorScheme.css";

function ColorScheme({
  schemeColors,
  handleCopyHex,
}) {
  const colorScheme = schemeColors.map((color, index) => (
    <Color
      color={color}
      key={index}
      handleCopyHex={handleCopyHex}
    />
  ));
  return <section className="color-scheme">{colorScheme}</section>;
}

export default ColorScheme;
