import { useEffect, useState } from "react";
import Header from "./components/Header";
import ColorScheme from "./components/ColorScheme";
function App() {
  const [schemeColors, setSchemeColors] = useState([]);
  const [schemeData, setSchemeData] = useState({
    selectedColor: "#FFDB58",
    selectedScheme: "monochrome",
    numColors: 5,
  });
  const [savedSchemes, setSavedSchemes] = useState(getSavedSchemes());
  const [mode, setMode] = useState("light");

  function handleChange(e) {
    const { name, value } = e.target;

    setSchemeData({
      ...schemeData,
      [name]: value,
    });
  }

  function fetchSchemeColors() {
    const { selectedColor, selectedScheme, numColors } = schemeData;
    try {
      fetch(
        `https://www.thecolorapi.com/scheme?hex=${selectedColor.slice(
          1
        )}&mode=${selectedScheme}&count=${numColors}`
      )
        .then((response) => response.json())
        .then((data) => setSchemeColors((prevSchemeColors) => data.colors));
    } catch (error) {
      console.log(error);
    }
  }

  function handleSaveSchemeClick() {
    setSavedSchemes((prevSavedSchemes) => [schemeData, ...prevSavedSchemes]);
  }

  function getSavedSchemes() {
    const stringifiedSchemes = localStorage.getItem("savedSchemes");
    const storedSchemes = JSON.parse(stringifiedSchemes);
    return storedSchemes || [];
  }

  useEffect(() => {
    const stringifiedSchemes = JSON.stringify(savedSchemes);
    localStorage.setItem("savedSchemes", stringifiedSchemes);
  }, [savedSchemes]);

  useEffect(() => {
    fetchSchemeColors();
  }, [schemeData]);


  function toggleMode() {
    mode === "light"
      ? setMode((prevMode) => "dark")
      : setMode((prevMode) => "light");
  }
  return (
    <div className={`App ${mode}`}>
      <Header
        schemeData={schemeData}
        handleChange={handleChange}
        toggleMode={toggleMode}
        mode={mode}
      />
      <ColorScheme schemeColors={schemeColors} />
      <button id="save-btn" className="btn save-btn" onClick={handleSaveSchemeClick}>
        Save Color Scheme
      </button>
    </div>
  );
}

export default App;
