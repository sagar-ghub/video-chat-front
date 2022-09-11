import React, { useContext, useEffect, useRef } from "react";
import { SocketContext } from "../SocketContext";

export default function VideoPlayer() {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    userStream,
  } = useContext(SocketContext);
  const myv = useRef();
  useEffect(() => {
    // myVideo.current.srcObject = stream;
  }, []);
  return (
    <div>
      {stream && (
        <div>
          <video playsInline autoPlay muted ref={myVideo}></video>
        </div>
      )}

      {<video playsInline autoPlay muted ref={userVideo}></video>}
    </div>
  );
}
