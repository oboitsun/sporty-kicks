import React from "react";
import "../styles/roadmap.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
const roadmap = [
  {
    month: "JUNE 2021",
    text: "Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis.",
    ball: "/imgs/1.png",
  },
  {
    month: "JULY 2021",
    text: "Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis.",
    ball: "/imgs/2.png",
  },
  {
    month: "AUGUST 2021",
    text: "Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis.",
    ball: "/imgs/3.png",
  },
  {
    month: "SEPTEMBER 2021",
    text: "Vivamus vel tincidunt mauris. Sed sollicitudin congue nunc ac iaculis.",
    ball: "/imgs/4.png",
  },
];
export default function Roadmap() {
  return (
    <div id="roadmap">
      <div className="my-container relative">
        <img className="baseball" src="/imgs/3.png" alt="cross" />
        <img className="bowling" src="/imgs/bowling-ball.png" alt="cross" />
        <Heading>
          <p className="font-bold">
            Road<span className="text-gradient">map</span>
          </p>
        </Heading>
        <div className="lg:w-11/12 mx-auto pb-10">
          <SubHeading>
            Donec gravida tellus nec elit consequat ultrices. Vivamus vel tincidunt
            mauris. Sed sollicitudin congue nunc ac iaculis. Vivamus tristique massa ante,
            et accumsan felis imperdiet at. In purus libero, venenatis dignissim massa ac,
            sodales malesuada quam. Aliquam in fermentum metus. Donec in mauris arcu.
          </SubHeading>
        </div>
        <div className="board-wrapper relative">
          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />
          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />
          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />
          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />

          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />
          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />

          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />
          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />
          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />
          <img className="arrow" src="/imgs/arrow.svg" alt="arrow" />
          <div className="board">
            <div className="board-grid relative">
              <div className="gate gate-r"></div>
              <div className="gate gate-l"></div>
              {/* 1st point   */}
              <div className="up up2 flex flex-col items-center">
                <img className="w-1/2 bounce" src={roadmap[0].ball} alt="ball" />
                <p className="text-gradient font-bold uppercase text-2xl lg:text-4xl text-center">
                  {roadmap[0].month}
                </p>
                <p className="text-white text-center w-3/4 mx-auto">{roadmap[0].text}</p>
              </div>
              {/* midfield  */}

              <div className="hidden lg:block lg:row-span-2 lg:col-start-2 relative">
                <div className="round"></div>
                <div className="w-1.5 h-full bg-white mx-auto"></div>
              </div>
              {/* 2nd point   */}
              <div className="up flex flex-col items-center">
                <img className="w-1/2 bounce" src={roadmap[1].ball} alt="ball" />
                <p className="text-gradient font-bold uppercase text-2xl lg:text-4xl text-center">
                  {roadmap[1].month}
                </p>
                <p className="text-white text-center w-3/4 mx-auto">{roadmap[1].text}</p>
              </div>
              <div className="lg:hidden h-36  relative">
                <div className="round"></div>
                <div className="w-1.5 h-full bg-white mx-auto"></div>
              </div>
              {/* 3rd point   */}
              <div className="bottom flex flex-col items-center">
                <p className="text-gradient font-bold uppercase text-2xl lg:text-4xl text-center">
                  {roadmap[2].month}
                </p>
                <p className="text-white text-center w-3/4 mx-auto">{roadmap[2].text}</p>
                <img className="w-1/2 bounce" src={roadmap[2].ball} alt="ball" />
              </div>
              {/* 4th point   */}
              <div className="bottom flex flex-col items-center">
                <p className="text-gradient font-bold uppercase text-2xl lg:text-4xl text-center">
                  {roadmap[3].month}
                </p>
                <p className="text-white text-center w-3/4 mx-auto">{roadmap[3].text}</p>
                <img className="w-1/2 bounce" src={roadmap[3].ball} alt="ball" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
