import React from "react";
import "./App.css";

function App() {
  const sendMessage = () => {};
  return (
    <div className="App">
      <input type="text" placholder="Message ... " />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
