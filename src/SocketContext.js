import React, { useState, useEffect, createContext, useRef } from "react";

import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();
const socket = io.connect("https://video-backend.herokuapp.com/");
const ContextProvider = ({ children }) => {
  const [stream, setStream] = useState(null);
  const [me, setMe] = useState("");
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        // console.log(stream);
        myVideo.current.srcObject = stream;
      })
      .catch(function (err) {
        console.log(err);
      });

    socket.on("me", (id) => setMe(id));

    socket.on("calluser", ({ from, name: callerName, signal }) => {
      setCall({ isRecievedCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);
    console.log("answerCall", call);
    const peer = new Peer({ initiator: false, trickle: false, stream: stream });
    peer.on("signal", (data) => {
      socket.emit("answercall", { signal: data, to: call.from });
    });
    peer.on("stream", (currStream) => {
      console.log("stream", currStream);
      userVideo.current.srcObject = currStream;
    });
    peer.signal(call.signal);

    connectionRef.current = peer;
  };
  const callUser = (id) => {
    console.log(id);
    const peer = new Peer({ initiator: true, trickle: false, stream: stream });
    peer.on("signal", (data) => {
      console.log("signal", data);
      socket.emit("calluser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    socket.on("callaccepted", ({ signal }) => {
      setCallAccepted(true);
      // console.log("As", signal);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        callEnded,
        me,
        stream,
        answerCall,
        callUser,
        leaveCall,
        name,
        myVideo,
        userVideo,
        setName,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, ContextProvider };
