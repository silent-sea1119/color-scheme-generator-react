import "./Header.css";
import ColorForm from "./ColorForm";
function Header({schemeData, handleChange}) {
  return (
    <header className="header">
      <h1>Color Scheme Generator</h1>
      <section className="selects">
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
