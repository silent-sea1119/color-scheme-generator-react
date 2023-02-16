import "./Color.css";

function Color({ color, handleCopyHexClick}) {
  return (
    <section className="color">
      <div
        className="color-bar"
        style={{ backgroundColor: color.hex.value }}
        onClick={() => {
          handleCopyHexClick(color.hex.value);
        }}
      >
      </div>
      <div
        className="hex"
        onClick={() => {
          handleCopyHexClick(color.hex.value);
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
