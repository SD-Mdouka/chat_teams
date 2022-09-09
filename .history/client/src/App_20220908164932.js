import { useState } from "react";
import io from "socket.io-client";
import Chat from "./Chat";
import "./App.css";

const socket = io.connect("http://localhost:3001");
function App() {
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Number Room ... "
        onChange={(e) => {
          setRoom(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="User ... "
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={joinRoom}>join Number</button>
      <Chat socket={socket} username={username} room={room} />
    </div>
  );
}

export default App;
