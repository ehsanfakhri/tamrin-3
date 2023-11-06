import MaxLengthTextArea from "./components/MaxLengthTextArea";

function App() {
  const textareaStyle = {
    borderRadius: 6,
    padding: "12px",
    fontSize: "16px",
    color: "#333",
    backgroundColor: "#fff",
  };
  return (
    <div>
      <MaxLengthTextArea maxLen={20} style={textareaStyle} />
    </div>
  );
}

export default App;
