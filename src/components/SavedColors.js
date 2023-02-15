import ColorScheme from "./ColorScheme";
import "./SavedColors.css";

function SavedColors({
  savedSchemes,
  handleDeleteClick,
  handleCopyHex,
}) {
  const schemes = savedSchemes.map((scheme, index) => (
    <li className="saved-scheme" key={`${index}a`}>
      <ColorScheme
        schemeColors={scheme}
        handleCopyHex={handleCopyHex}
      />
      <button
        className="delete-btn btn"
        onClick={() => {
          handleDeleteClick(scheme);
        }}
      >
        Delete Scheme
      </button>
    </li>
  ));
  return <ul className="schemes">{schemes}</ul>;
}

export default SavedColors;
