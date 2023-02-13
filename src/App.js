import {useEffect, useState} from "react";
import Header from "./components/Header";
function App() {
  const [schemeData, setSchemeData] = useState({
    selectedColor: "#FFDB58",
    selectedScheme: "monochrome",
    numColors: 5
  })

  function handleChange(e) {
    const {name, value} = e.target;

    setSchemeData({
      ...schemeData,
      [name]: value,
    })

    console.log(schemeData)
  }
  return (
    <div className="App">
      <Header schemeData={schemeData} handleChange={handleChange}/>
    </div>
  );
}

export default App;
