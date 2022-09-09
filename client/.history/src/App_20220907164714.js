import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="71b184e4-bb97-430f-9052-6ecba9e3d13d"
        userName="salah_chat"
        userSecret="123123"
      />
    </div>
  );
}

export default App;
