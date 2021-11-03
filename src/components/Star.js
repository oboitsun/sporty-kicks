import React from "react";
import "../styles/star.scss";
import { motion } from "framer-motion";
export default function Star({ anim }) {
  return (
    <div className="relative star pointer-events-none">
      <div className="star-core"></div>
      <motion.div className="star-gradient-in"></motion.div>
      <motion.div
        initial={anim && { x: "-50%", y: "-50%" }}
        animate={anim && { scale: 1.2 }}
        transition={{ duration: 1, repeatType: "mirror", repeat: "Infinity" }}
        className="star-gradient-out"
      ></motion.div>
    </div>
  );
}
