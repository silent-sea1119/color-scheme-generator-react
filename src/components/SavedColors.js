import ColorScheme from "./ColorScheme";
import "./SavedColors.css";

function SavedColors({
  savedSchemes,
  handleDeleteClick,
  handleCopyHex,
  mode
}) {
  const schemes = savedSchemes.map((scheme, index) => (
    <li className="saved-scheme" key={`${index}a`}>
      <ColorScheme
        schemeColors={scheme}
        handleCopyHex={handleCopyHex}
      />
      <button
        className={`btn btn-${mode}`}
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
