import {useEffect, useState} from "react";
import Header from "./components/Header";
function App() {
  const [schemeColors, setSchemeColors] = useState([])
  const [schemeData, setSchemeData] = useState({
    selectedColor: "#FFDB58",
    selectedScheme: "monochrome",
    numColors: 5
  })
  const [mode, setMode] = useState("light")

  function handleChange(e) {
    const {name, value} = e.target;

    setSchemeData({
      ...schemeData,
      [name]: value,
    })
  }

  function fetchSchemeColors() {
    const {selectedColor, selectedScheme, numColors} = schemeData
    try {
      fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.slice(1)}&mode=${selectedScheme}&count=${numColors}`)
        .then((response) => response.json())
        .then((data) =>console.log(data.colors))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSchemeColors()
  }, [schemeData])

  function toggleMode() {
    mode === "light" ? setMode((prevMode) => "dark") : setMode((prevMode) => "light")
  }
  return (
    <div className={`App ${mode}`}>
      <Header schemeData={schemeData} handleChange={handleChange} toggleMode={toggleMode} mode={mode}/>
    </div>
  );
}

export default App;
