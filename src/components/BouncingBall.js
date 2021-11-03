import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const balls = ["/imgs/1.png", "/imgs/2.png", "/imgs/3.png", "/imgs/4.png"];

export default function BouncingBall() {
  const [ball, setBall] = useState(0);
  const [currInterval, setCurrInterval] = useState(null);
  useEffect(() => {
    const bounce = setInterval(() => {
      setBall((prev) => (prev < balls.length - 1 ? prev + 1 : 0));
    }, 1000);
    setCurrInterval(bounce);
    return clearInterval(clearInterval);
  }, []);
  return (
    <div
      style={{ width: "15%", paddingBottom: "15%" }}
      className="absolute top-3/4 -right-10 w-1/12 "
    >
      <motion.img
        transition={{ yoyo: "Infinity", duration: 0.5, ease: "easeOut" }}
        animate={{ y: ["0%", "-100%"], scaleY: [0.9, 1] }}
        src={balls[ball]}
        alt="png"
      />
    </div>
  );
}
