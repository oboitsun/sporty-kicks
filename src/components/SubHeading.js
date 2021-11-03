import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/subheading.scss";
export default function SubHeading({ children }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <motion.p
      ref={ref}
      animate={inView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
      className="subheading"
    >
      {children}
    </motion.p>
  );
}
