import React, { useEffect, useState } from "react";
import TimerCountItem from "./TimerCountItem";

import { calculateTimeLeft } from "./utils";
export default function Timer() {
  const dayX = new Date("November 24, 2021 04:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: "0",
    days: "0",
    minutes: "0",
    seconds: "0",
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(dayX));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="w-full flex items-center  mb-4 lg:mt-4 lg:mb-6 relative ">
      <p className=" text-white  relative min-w-max mr-4">
        Time till <br />
        launch:
      </p>
      <div className=" text-white  timer">
        <TimerCountItem time={timeLeft.days} text="Days" />

        <TimerCountItem time={timeLeft.hours} text="Hours" />

        <TimerCountItem time={timeLeft.minutes} text="Minutes" />

        <TimerCountItem time={timeLeft.seconds} text="Seconds" />
      </div>
    </div>
  );
}
