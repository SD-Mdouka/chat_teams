import React from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io.connect("http://localhost:3001");
function App() {
  const sendMessage = () => {
    socket.emit();
  };
  return (
    <div className="App">
      <input type="text" placeholder="Message ... " />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
