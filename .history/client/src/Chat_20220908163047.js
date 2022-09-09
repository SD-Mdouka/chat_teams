import React, { useState } from "react";

const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const MessgaeData = {
        room: room,
        auther: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours +
          " : " +
          new Date(Date.now()).getMinutes,
      };
      await socket.emit("send_message", MessgaeData);
    }
  };
  return (
    <div>
      <div className="chat_header">
        <p>Live Chat</p>
      </div>
      <div className="chat_body"></div>
      <div className="chat_footer">
        <input
          type="text"
          placeholder="Hay ...."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;
