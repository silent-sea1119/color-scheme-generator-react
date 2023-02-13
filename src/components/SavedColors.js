import ColorScheme from "./ColorScheme";
import "./SavedColors.css";

function SavedColors({savedSchemes}) {

    const schemes = savedSchemes.map((scheme, index) => (
        <li className="saved-scheme" key={index}>
        <ColorScheme schemeColors={scheme}/>
        </li>
    ))
  return <ul className="schemes">{schemes}</ul>;
}

export default SavedColors;
