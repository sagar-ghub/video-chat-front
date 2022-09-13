import React, { useContext, useState } from "react";
import { SocketContext } from "../SocketContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
export default function Options({ children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <div className="sm:absolute sm:text-sm top-24  static right-0 m-5">
      {callAccepted && !callEnded ? (
        <a
          href="#"
          class="inline-flex items-center py-2 px-3 mr-10 mt-10 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-blue-800"
          onClick={leaveCall}
        >
          Hang Up
          {/* <svg
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
          </svg> */}
        </a>
      ) : (
        <div class="p-6 max-w-sm sm:w-full w-48  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <span class="mb-2 sm:text-2xl text-sm  font-bold tracking-tight text-gray-900 dark:text-white">
              Have a Id?
            </span>
          </a>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Place a Call
          </p>

          <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => callUser(idToCall)}
          >
            Call
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
        </div>
      )}
      {/* <div>
        <input
          type="text"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
        />
        
        {callAccepted && !callEnded ? (
          <button
            className="transition hover:-translate-y-1 hover:scale-110 rounded p-2 bg-blue-500 text-bold border-2 border-blue-500  hover:shadow-xl"
            onClick={leaveCall}
          >
            Hang Up
          </button>
        ) : (
          <button
            className="transition hover:-translate-y-1 hover:scale-110 rounded p-2 bg-blue-500 text-bold border-2 border-blue-500  hover:shadow-xl"
            onClick={() => callUser(idToCall)}
          >
            Call
          </button>
        )}
      </div> */}

      {children}
    </div>
  );
}
