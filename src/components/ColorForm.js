import "./ColorForm.css";

function ColorForm({ schemeData, handleChange }) {
  return (
    <form className="color-form">
      <label htmlFor="color-input" className="visually-hidden">
        choose a color
      </label>
      <input
        type="color"
        id="selectedColor"
        className="color-input"
        name="selectedColor"
        value={schemeData.selectedColor}
        onChange={handleChange}
      />
      <label htmlFor="scheme-select" className="visually-hidden">
        choose a color scheme
      </label>
      <select
        name="selectedScheme"
        id="selectedScheme"
        className="scheme-select"
        value={schemeData.selectedScheme}
        onChange={handleChange}
      >
        <option value="monochrome">Monochrome</option>
        <option value="monochrome-dark">Monochrome Dark</option>
        <option value="monochrome-light">Monochrome Light</option>
        <option value="analogic">Analogic</option>
        <option value="complement">Complement</option>
        <option value="analogic-complement">Analogic Complement</option>
        <option value="triad">Triad</option>
        <option value="quad">Quad</option>
      </select>
      <label htmlFor="num-select" className="visually-hidden">
        how many colors in scheme
      </label>
      <select
        name="numColors"
        id="numColors"
        className="num-colors"
        value={schemeData.numColors}
        onChange={handleChange}
      >
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </form>
  );
}

export default ColorForm;
