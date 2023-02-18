import "./CopiedMessage.css";

function CopiedMessage({ mode, copiedHexValue }) {
  return (
    <div className={`copied-message ${mode}`}>
      {copiedHexValue} copied to clipboard
    </div>
  );
}

export default CopiedMessage;
