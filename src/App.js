import logo from "./logo.svg";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notification from "./components/Notification";

function App() {
  return (
    <div className="App">
      <VideoPlayer></VideoPlayer>

      <Options>
        <Notification />
      </Options>
    </div>
  );
}

export default App;
