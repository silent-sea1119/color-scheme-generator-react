import "./Color.css";

function Color({ color }) {
  return (
    <section className="color">
      <div
        className="color-bar"
        style={{ backgroundColor: color.hex.value }}
      ></div>
      <div
        id="hex"
        className="hex"
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
