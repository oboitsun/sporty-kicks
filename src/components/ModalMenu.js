import React from "react";
import { motion } from "framer-motion";

import "../styles/modal-menu.scss";
import { Link as Anchor } from "react-scroll";
import Socials from "./Socials";
import ConnectWallet from "./ConnectWallet";

export default function ModalMenu({ showMenu, setShowMenu }) {
  const links = [
    { href: "about-us", text: "About Us" },
    { href: "team", text: "Team" },
    { href: "roadmap", text: "Roadmap" },
    { href: "faq", text: "FAQ" },
    { href: "contact-us", text: "Contact Us" },
  ];
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "cursor-pointer text-white font-bold lg:text-grey ",
  };
  const cont = {
    show: {
      height: "100vh",
      zIndex: 20,
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
    hidden: {
      height: "100vh",
      zIndex: 0,
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate={showMenu ? "show" : "hidden "}
      className={`modal-menu ${!showMenu && "pointer-events-none"}`}
    >
      {links.map((l, i) => (
        <motion.div key={i} className="text-3xl mb-5">
          <Anchor
            onClick={() => {
              setShowMenu(false);
            }}
            to={l.href}
            {...linkProps}
          >
            {l.text}
          </Anchor>
        </motion.div>
      ))}
      <motion.div key={11} className="">
        <ConnectWallet />
      </motion.div>
      <motion.div key={12} className="  ">
        <Socials big modal />{" "}
      </motion.div>
      <img
        style={{ width: 64 }}
        className="block mx-auto"
        src="/imgs/dfinity-logo.png"
        alt="dfinity-blockchain"
      />
    </motion.div>
  );
}
