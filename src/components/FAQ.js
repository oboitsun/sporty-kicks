import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const faqs = [
  { qstn: "How do I buy a Sporty kicks?", answr: "The Answer" },
  { qstn: "What Blockhain and technology are Sporty kicks on?", answr: "The Answer" },
  { qstn: "What can I do with once I get my Sporty kicks NFT?", answr: "The Answer" },
  { qstn: "How many Sporty kicks can I buy?", answr: "The Answer" },
];
export default function FAQ() {
  return (
    <div id="faq" className="relative">
      <div className="my-container">
        <div className=" flex flex-col lg:grid grid-cols-1 place-items-center max-w-4xl mx-auto">
          <div className="faq-list lg:order-1 relative z-10">
            <Heading>
              FAQ<span className="text-gradient">'S</span>
            </Heading>
            <div className="text-center  mx-auto">
              <SubHeading>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s
              </SubHeading>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-5 w-full">
              <div className="faq-divider"></div>
              <div className="faq-divider hidden lg:block"></div>
              {/* <div className="faq-divider hidden lg:block"></div> */}
              {faqs.map((f, i) => (
                <FaqItem key={i} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
