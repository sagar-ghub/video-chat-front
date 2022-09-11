import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

export default function Notification() {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      s
      {call.isRecievedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </button>
        </div>
      )}
    </>
  );
}
