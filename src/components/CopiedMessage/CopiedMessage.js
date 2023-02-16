import "./CopiedMessage.css";

function CopiedMessage({ mode, selectedColor }) {
  return (
    <div className={`copied-message ${mode}`}>
      {selectedColor} copied to clipboard
    </div>
  );
}

export default CopiedMessage;
