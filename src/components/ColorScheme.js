import Color from "./Color.js";
import "./ColorScheme.css";

function ColorScheme({ schemeColors, handleCopyHex, copied, copiedColor }) {
  const colorScheme = schemeColors.map((color, index) => (
    <Color
      color={color}
      key={index}
      handleCopyHex={handleCopyHex}
      copied={copied}
      copiedColor={copiedColor}
    />
  ));
  return <section className="color-scheme">{colorScheme}</section>;
}

export default ColorScheme;
