import "./Header.css";
import ColorForm from "./ColorForm";
function Header({ schemeData, handleChange, toggleMode, mode }) {
  return (
    <header className={`header ${mode}`}>
      <h1>Color Scheme Generator</h1>
      <section className="selects">
        <ColorForm schemeData={schemeData} handleChange={handleChange} mode={mode}/>
        <button
          className={`btn btn-${mode} mode-btn`}
          onClick={toggleMode}
        >
         {mode === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </section>
    </header>
  );
}

export default Header;
