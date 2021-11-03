import React from "react";
import Heading from "./Heading";
import "../styles/about-us.scss";
import SubHeading from "./SubHeading";

export default function AboutUs() {
  return (
    <div id="about-us">
      <div className="my-container lg:pb-20 relative">
        <img className="cross" src="/imgs/cross.png" alt="cross" />
        <img className="nineball" src="/imgs/nineball.png" alt="cross" />
        <img className="puck" src="/imgs/puck.png" alt="cross" />
        <Heading>
          <span className="text-white">About</span>{" "}
          <span className="text-gradient">Sporty kicks</span>
        </Heading>
        <SubHeading>
          Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt mauris.
          Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante, et
          accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac,
          sodales malesuada quam. Aliquam in fermentum metus. Donec in mauris arcu.
        </SubHeading>
        <img className="w-full" src="/imgs/about-us.png" alt="Squad" />
      </div>
    </div>
  );
}
