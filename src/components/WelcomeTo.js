import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import Timer from "./Timer";
// import dynamic from "next/dynamic";
import ConnectWallet from "./ConnectWallet";
// const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function WelcomeTo({
  setShowPopup,
  showPopup,
  setUserAddress,
  userAddress,
}) {
  const cont = {
    show: {
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { x: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "-60vw", opacity: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div variants={cont} initial="hidden" animate="show" className="welcome-to">
      <motion.p variants={item} key={1} className="title  ">
        Welcome to
      </motion.p>
      <motion.p variants={item} key={2} className="title title-big text-gradient">
        the sporty <br />
        kicks
      </motion.p>

      <motion.div variants={item} key={4}>
        <Timer />
      </motion.div>
      <motion.div
        variants={item}
        key={5}
        className="w-full connect-wallet z-20 flex flex-col items-center lg:flex-row gap-2  "
      >
        <div className="w-full">
          <ConnectWallet
            outlined
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            setUserAddress={setUserAddress}
            userAddress={userAddress}
          />
        </div>
        <a className="block w-full" href="https://discord.com">
          <button className="btn bg-purp w-full"> Join The Discord</button>{" "}
        </a>
        <img
          style={{ width: 64 }}
          className="block ml-4 h-auto"
          src="/imgs/dfinity-logo.png"
          alt="dfinity-blockchain"
        />
      </motion.div>
    </motion.div>
  );
}
