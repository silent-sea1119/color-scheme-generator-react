import "./Header.css";
import ColorForm from "./ColorForm";
function Header({schemeData, handleChange}) {
  return (
    <header className="header">
      <h1>Color Scheme Generator</h1>
      <section className="selects">
        {/* <label for="color-input" class="visually-hidden">choose a color</label>
        <input
          type="color"
          id="color-input"
          class="color-input"
          value="#FFDB58"
        />
        <label for="scheme-select" class="visually-hidden"
          >choose a color scheme</label
        >
        <select name="scheme" id="scheme-select" class="scheme-select">
          <option value="monochrome">Monochrome</option>
          <option value="monochrome-dark">Monochrome Dark</option>
          <option value="monochrome-light">Monochrome Light</option>
          <option value="analogic">Analogic</option>
          <option value="complement">Complement</option>
          <option value="analogic-complement">Analogic Complement</option>
          <option value="triad">Triad</option>
          <option value="quad">Quad</option>
        </select>
        <label for="num-select" class="visually-hidden">how many colors in scheme</label>
        <select name="num-colors" id="num-select" class="num-select">
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select> */}
        <ColorForm schemeData={schemeData} handleChange={handleChange}/>
        <button
          className="mode-btn btn disabled light-btn"
          id="light-mode"
          disabled
        >
          light mode
        </button>
        <button className="mode-btn btn dark-button" id="dark-mode">
          dark mode
        </button>
      </section>
    </header>
  );
}

export default Header;
