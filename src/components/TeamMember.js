import React from "react";
import { motion } from "framer-motion";
export default function TeamMember({ data, show, delay }) {
  const item = {
    show: {
      y: [0, 5, -5],
      transition: {
        repeat: "Infinity",
        repeatType: "mirror",
        duration: 4,
        delay,
        repeatDelay: 0,
      },
    },
    hidden: {
      y: 0,
    },
  };
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="relative robo-container">
        <img className="robo" src={data.imgSrc} alt="Robo" />
        <div className="round-bg"></div>
      </div>

      <p className="text-gradient font-bold uppercase team-name">{data.name}</p>
      <p className="text-white  team-pos">{data.pos}</p>
    </div>
  );
}
