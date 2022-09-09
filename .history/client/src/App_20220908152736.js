import { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io.connect("http://localhost:3001");
function App() {
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messageRecibtion, setMessageRecibtion] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };
  // useEffect(() => {
  //   socket.on("recedie_message", (data) => {
  //     setMessageRecibtion(data.message);
  //   });
  // }, [socket]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Number Room ... "
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Message ... "
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={joinRoom}>join Number</button>
      {/* <button onClick={sendMessage}>Send Message</button> */}
      {/* <h1>message : {message}</h1>
      <h1>message : {messageRecibtion}</h1> */}
    </div>
  );
}

export default App;
