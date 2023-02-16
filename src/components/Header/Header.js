import "./Header.css";
import ColorForm from "../ColorForm/ColorForm";
function Header({ schemeData, handleChange, toggleMode, mode }) {
  // Conditional formatting for button text based on mode stored in state
  const buttonText = mode === "light" ? "Dark Mode" : "Light Mode";
  return (
    <header className={`header ${mode}`}>
      <h1>Color Scheme Generator</h1>
      <section className="selects">
        <ColorForm
          schemeData={schemeData}
          handleChange={handleChange}
          mode={mode}
        />
        <button className={`btn-${mode} mode-btn`} onClick={toggleMode}>
          {buttonText}
        </button>
      </section>
    </header>
  );
}

export default Header;
