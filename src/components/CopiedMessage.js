import "./CopiedMessage.css";

function CopiedMessage({ mode }) {
  return (
    <div className={`copied-message ${mode}`}>Color copied to clipboard</div>
  );
}

export default CopiedMessage;
