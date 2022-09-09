import { useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io.connect("http://localhost:3001");
function App() {
  const sendMessage = () => {
    socket.emit("send_message", { message: "hello" });
  };
  useEffect(() => {
    socket.on("recedie_message", (data) => {
      alert(data.message);
    });
  }, [socket]);
  return (
    <div className="App">
      <input type="text" placeholder="Message ... " />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
