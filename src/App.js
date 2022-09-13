import logo from "./logo.svg";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notification from "./components/Notification";
import Chat from "./components/Chat";

function App() {
  return (
    <div className=" App h-screen bg-gradient-to-r from-blue-400 to-sky-800 text-slate pt-5">
      <p className="text-3xl font-bold text-center"> Video Chat App</p>
      <p class="line-1 anim-typewriter">Start by making a call to someone</p>
      <div className="flex flex-row pt-10 pb-0 grid grid-cols-2 ml-16">
        <div className="flex justify-center  aspect-video ">
          <VideoPlayer />
        </div>

        <div>
          {/* Chat */}
          <Chat />
        </div>
      </div>
      <div className="flex flex-row mt-24 pt-10 pb-0 grid grid-cols-2 ml-16">
        <Options>
          <Notification />
        </Options>
      </div>
    </div>
  );
}

export default App;
