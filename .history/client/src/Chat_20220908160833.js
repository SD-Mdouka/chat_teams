import React from "react";

const Chat = ({ socket, username, room }) => {
  return (
    <div>
      <div className="chat_header">
        <p>Live Chat</p>
      </div>
      <div className="chat_body"></div>
      <div className="chat_footer">
        <input type="text" placeholder="Hay ...." />
        <button>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;
