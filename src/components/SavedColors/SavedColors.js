import ColorScheme from "../ColorScheme/ColorScheme";
import "./SavedColors.css";

function SavedColors({
  savedSchemes,
  handleDeleteClick,
  handleCopyHexClick,
  mode,
}) {
  // Maps over color schemes stored in state and renders them in ColorScheme components
  const schemes = savedSchemes.map((scheme, index) => (
    <li className="saved-scheme" key={`${index}a`}>
      <ColorScheme
        schemeColors={scheme}
        handleCopyHexClick={handleCopyHexClick}
      />
      <button
        className={`btn-${mode}`}
        onClick={() => {
          handleDeleteClick(scheme);
        }}
      >
        Delete Color Scheme
      </button>
    </li>
  ));
  return <ul className="schemes">{schemes}</ul>;
}

export default SavedColors;
