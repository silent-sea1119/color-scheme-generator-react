import "./Header.css";
import ColorForm from "./ColorForm";
function Header({ schemeData, handleChange, toggleMode, mode }) {
  return (
    <header className="header">
      <h1>Color Scheme Generator</h1>
      <section className="selects">
        <ColorForm schemeData={schemeData} handleChange={handleChange} />
        <button
          className="mode-btn btn disabled light-btn"
          id="light-mode"
          onClick={toggleMode}
        >
         {mode === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </section>
    </header>
  );
}

export default Header;
