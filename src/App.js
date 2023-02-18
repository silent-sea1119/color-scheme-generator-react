import { useCallback, useEffect, useState } from "react";

import Header from "./components/Header/Header";
import ColorScheme from "./components/ColorScheme/ColorScheme";
import CopiedMessage from "./components/CopiedMessage/CopiedMessage";
import SavedColors from "./components/SavedColors/SavedColors";

import "./App.css";

function App() {
  // State
  const [schemeColors, setSchemeColors] = useState([]);
  const [schemeData, setSchemeData] = useState({
    selectedColor: "#FFDB58",
    selectedScheme: "monochrome",
    numColors: 5,
  });
  const [savedSchemes, setSavedSchemes] = useState(getSavedSchemes());
  const [mode, setMode] = useState("light");
  const [copiedHex, setCopiedHex] = useState({
    hex: "",
    copied: false,
  });

  // Change handler for ColorForm
  function handleChange(e) {
    const { name, value } = e.target;

    setSchemeData({
      ...schemeData,
      [name]: value,
    });
  }

  // Fetches selected scheme colors based on data stored in state
  const fetchSchemeColors = useCallback(() => {
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
  }, [schemeData]);

  //Manages side effects of accessing colors from API
  useEffect(() => {
    fetchSchemeColors();
    document.body.className = mode;
  }, [schemeData, mode, fetchSchemeColors]);

  // Click handler for saved schemes
  function handleSaveSchemeClick() {
    setSavedSchemes((prevSavedSchemes) => [schemeColors, ...prevSavedSchemes]);
  }

  // Pulls saved schemes from localStorage
  function getSavedSchemes() {
    const stringifiedSchemes = localStorage.getItem("savedSchemes");
    const storedSchemes = JSON.parse(stringifiedSchemes);
    return storedSchemes || [];
  }

  // Manages side effects of saving schemes in localStorage
  useEffect(() => {
    const stringifiedSchemes = JSON.stringify(savedSchemes);
    localStorage.setItem("savedSchemes", stringifiedSchemes);
  }, [savedSchemes]);

  // CLick handler for deleting schemes from localStorage
  function handleDeleteClick(selectedSchemeIndex) {
    setSavedSchemes((prevSavedSchemes) => {
      return prevSavedSchemes.filter(
        (scheme, index) => index !== selectedSchemeIndex
      );
    });
  }

  // Toggles ligt and darkmode and updates state
  function toggleMode() {
    if (mode === "light") {
      setMode((prevMode) => "dark");
    } else {
      setMode((prevMode) => "light");
    }
  }

  // Click handler for copying hex to clipboard
  function handleCopyHexClick(hexToCopy) {
    setCopiedHex((prevCopiedHex) => ({
      ...prevCopiedHex,
      hex: hexToCopy,
      copied: !prevCopiedHex.copied,
    }));
    navigator.clipboard.writeText(hexToCopy);

    setTimeout(() => {
      setCopiedHex((prevCopiedHex) => ({
        ...prevCopiedHex,
        hex: "",
        copied: !prevCopiedHex.copied,
      }));
    }, 1500);
  }

  return (
    <div className={`${mode}`}>
      <Header
        schemeData={schemeData}
        handleChange={handleChange}
        toggleMode={toggleMode}
        mode={mode}
      />
      <main className={`${mode}`}>
        <ColorScheme
          schemeColors={schemeColors}
          handleCopyHexClick={handleCopyHexClick}
          copied={copiedHex.copied}
        />
        <button className={`btn-${mode}`} onClick={handleSaveSchemeClick}>
          Save Color Scheme
        </button>
        <SavedColors
          savedSchemes={savedSchemes}
          handleDeleteClick={handleDeleteClick}
          copied={copiedHex.copied}
          handleCopyHexClick={handleCopyHexClick}
          mode={mode}
        />
      </main>
      {copiedHex.copied && (
        <CopiedMessage mode={mode} copiedHexValue={copiedHex.hex} />
      )}
    </div>
  );
}

export default App;
