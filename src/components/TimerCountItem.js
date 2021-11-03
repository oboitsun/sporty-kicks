import React from "react";

export default function TimerCountItem({ time, text }) {
  return (
    <div className="flex flex-col items-center text-white leading-none border-2 border-white py-3 ">
      <p className="timer-digits relative ">{time.length > 1 ? time : 0 + time}</p>
      {text === "Seconds" ? (
        <p className="timer-date relative ">{text}</p>
      ) : (
        <p className="timer-date relative ">{text}</p>
      )}
    </div>
  );
}
