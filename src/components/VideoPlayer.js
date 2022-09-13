import React, { useContext, useEffect, useRef } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

export default function VideoPlayer() {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    setName,
    me,
    call,
    userStream,
  } = useContext(SocketContext);
  const myv = useRef();

  return (
    <div className="">
      {callAccepted && !callEnded && (
        <div>
          Name:{" "}
          <span className="text-xl font-bold uppercase"> {call.name} </span>
        </div>
      )}
      {callAccepted && !callEnded ? (
        <div className=" h-100 sm:w-100  w-64 bg-slate-900  border-4 border-slate-900 rounded-lg mt-5 mr-5">
          <video
            classname="border-4 border-slate-800 bg-slate-900 rounded-lg"
            playsInline
            autoPlay
            muted
            ref={userVideo}
          ></video>
        </div>
      ) : (
        <div className="">
          <div className="transition delay-150 duration-300 flex text-sm sm:text-lg ">
            <div class="p-6 max-w-sm sm:w-full w-48 ml-3 sm:mb-0 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 sm:text-2xl text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="sm:h-5 w-25 h-4">Enter Your Name</span>
                </h5>
              </a>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Your name will be displayed to the person you are calling.
              </p>
              {/* {console.log(me)} */}
              <CopyToClipboard text={me}>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Copy Your ID
                  <svg
                    aria-hidden="true"
                    class="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
