import {useEffect, useState} from "react";
import Header from "./components/Header";
function App() {
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

    console.log(schemeData)
  }

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
