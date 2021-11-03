import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";
import SplashKicks from "./SplashKicks";
import BouncingBall from "./BouncingBall";

export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  return (
    <motion.div id="hero-section">
      <img
        className=" w-full h-full  object-cover absolute bottom-0 right-0  2xl:h-auto"
        src="/imgs/stadium-bg.png"
        alt="robo kicks stadium"
      />

      <div className="gradient h-1/3"></div>

      <div className="my-container relative flex flex-col lg:flex-row gap-3">
        <BouncingBall />
        <div className="w-full relative">
          <img
            className="w-full lg:hidden"
            src="/imgs/splash-team.png"
            alt="robo kicks stadium"
          />
          <img
            className="splash-team hidden lg:block"
            src="/imgs/splash-team.png"
            alt="robo kicks stadium"
          />
        </div>
        <img className="cross" src="/imgs/cross.png" alt="cross" />
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
        />
      </div>
    </motion.div>
  );
}
