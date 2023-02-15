import "./Color.css";

function Color({ color, handleCopyHex, copied, copiedColor, id }) {
  function renderCopiedMessage() {
    if (id && copied && color.hex.value === copiedColor) {
      return `${color.hex.value} copied to clipboard`;
    } else if (!id && copied && color.hex.value === copiedColor) {
      return `${color.hex.value} copied to clipboard`;
    } else {
      return null;
    }
  }
  const copiedMessage = renderCopiedMessage();
  return (
    <section className="color">
      <div
        className="color-bar"
        style={{ backgroundColor: color.hex.value }}
        onClick={() => {
          handleCopyHex(color.hex.value);
        }}
      >
        {copiedMessage}
      </div>
      <div
        className="hex"
        onClick={() => {
          handleCopyHex(color.hex.value);
        }}
        style={{
          backgroundColor: color.hex.value,
          opacity: "90%",
          marginTop: 0,
          color: "#313638",
        }}
      >
        {color.hex.value}
      </div>
    </section>
  );
}

export default Color;
