import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import TeamMember from "./TeamMember";
import "../styles/team.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const team = [
  {
    name: "Sheldon",
    pos: "CEO",
    imgSrc: "/imgs/sporty2.png",
  },
  {
    name: "Sergey",
    pos: "Artist",
    imgSrc: "/imgs/sporty3.png",
  },
  {
    name: "Alex",
    pos: "Developer",
    imgSrc: "/imgs/sporty4.png",
  },
  {
    name: "Oleksii",
    pos: "Developer",
    imgSrc: "/imgs/sporty5.png",
  },
];
export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const container = {
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };
  const item = {
    show: {
      y: "0%",
    },
    hidden: {
      y: "0%",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div id="team">
      <div className="my-container relative">
        <img className="cross" src="/imgs/cross-outline.png" alt="cross" />

        <Heading>Team</Heading>
        <SubHeading>
          Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris.
          Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et
          accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac,
          sodales malesuada quam. Aliquam in fermentum metus. Donec in mauris arcu.
        </SubHeading>
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 gap-10 lg:grid-cols-4"
        >
          {team.map((t, i) => (
            <motion.div variants={item} key={i} className="team-member">
              <TeamMember delay={i} show={inView} data={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
