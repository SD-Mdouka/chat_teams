import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io.connect("http://localhost:3001");
function App() {
  const [message, setMessage] = useState("");
  const [messageRecibtion, setMessageRecibtion] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };
  useEffect(() => {
    socket.on("recedie_message", (data) => {
      setMessageRecibtion(data.message);
    });
  }, [socket]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Message ... "
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>Send Message</button>
      <h1>message : {messageRecibtion}</h1>
    </div>
  );
}

export default App;
