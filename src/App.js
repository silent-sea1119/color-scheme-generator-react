import { useEffect, useState } from "react";
import Header from "./components/Header";
import ColorScheme from "./components/ColorScheme";
import SavedColors from "./components/SavedColors";

function App() {
  const [schemeColors, setSchemeColors] = useState([]);
  const [schemeData, setSchemeData] = useState({
    selectedColor: "#FFDB58",
    selectedScheme: "monochrome",
    numColors: 5,
  });
  const [savedSchemes, setSavedSchemes] = useState(getSavedSchemes());
  const [mode, setMode] = useState("light");
  const [copied, setCodpied] = useState(false);
  const [copiedColor, setCopiedColor] = useState("")

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
    setSavedSchemes((prevSavedSchemes) => [schemeColors, ...prevSavedSchemes]);
  }

  function getSavedSchemes() {
    const stringifiedSchemes = localStorage.getItem("savedSchemes");
    const storedSchemes = JSON.parse(stringifiedSchemes);
    return storedSchemes || [];
  }

  function handleDeleteClick(selectedScheme) {
    setSavedSchemes((prevSavedSchemes) => {
      return prevSavedSchemes.filter((scheme) => scheme !== selectedScheme);
    });
  }

  useEffect(() => {
    const stringifiedSchemes = JSON.stringify(savedSchemes);
    localStorage.setItem("savedSchemes", stringifiedSchemes);
  }, [savedSchemes]);

  useEffect(() => {
    fetchSchemeColors();
    document.body.className = mode;
  }, [schemeData, mode, fetchSchemeColors]);

  function toggleMode() {
    mode === "light"
      ? setMode((prevMode) => "dark")
      : setMode((prevMode) => "light");
  }

  function handleCopyHex(hexToCopy) {
    navigator.clipboard.writeText(hexToCopy);
    setCodpied((prevCopied) => !prevCopied);
    setCopiedColor((prevCopiedColor) => hexToCopy)
    setTimeout(()=> {
      setCodpied((prevCopied) => !prevCopied)
      setCopiedColor((prevCopiedColor) => "")
    }, 3000)
  }
  return (
    <div className={`${mode}`}>
      <Header
        schemeData={schemeData}
        handleChange={handleChange}
        toggleMode={toggleMode}
        mode={mode}
      />
      <main className={`App ${mode}`}>
        <ColorScheme
          schemeColors={schemeColors}
          handleCopyHex={handleCopyHex}
          copied={copied}
          copiedColor={copiedColor}
        />
        <button
          id="save-btn"
          className="btn save-btn"
          onClick={handleSaveSchemeClick}
        >
          Save Color Scheme
        </button>
        <SavedColors
          savedSchemes={savedSchemes}
          handleDeleteClick={handleDeleteClick}
          copied={copied}
          copiedColor={copiedColor}
          handleCopyHex={handleCopyHex}
        />
      </main>
    </div>
  );
}

export default App;
