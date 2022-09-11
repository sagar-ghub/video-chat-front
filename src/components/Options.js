import React, { useContext, useState } from "react";
import { SocketContext } from "../SocketContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function Options({ children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CopyToClipboard text={me}>
          <button variant="contained" color="primary">
            Copy Your ID
          </button>
        </CopyToClipboard>
      </div>
      <div>
        <input
          type="text"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
        />
        {/* {console.log("AS", me)} */}
        {callAccepted && !callEnded ? (
          <button
            variant="contained"
            color="secondary"
            className={"btn btn-primary"}
            onClick={leaveCall}
          >
            Hang Up
          </button>
        ) : (
          <button
            variant="contained"
            color="primary"
            className={"btn btn-primary"}
            onClick={() => callUser(idToCall)}
          >
            Call
          </button>
        )}
      </div>

      {children}
    </div>
  );
}
