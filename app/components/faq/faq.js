"use client";

import React, { useState } from "react";
import Image from "next/image";
import Pengapit from "@/public/assets/images/pengapit.png";
import Logo from "@/public/assets/images/logo.png";

const Faq = ({ question, answer, foto }) => {
  const [showBubble, setShowBubble] = useState(false);

  const toggleBubble = () => {
    setShowBubble((prev) => !prev);
  };
  return (
    <>
      {/* Nanya */}
      <div className="w-full">
        <div className="flex items-center gap-3">
          <Image
            src={foto}
            alt="faq 1"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div onClick={toggleBubble}>
            <div className="font-normal bg-third text-white px-5 md:px-5 py-2 md:py-3 rounded-2xl flex gap-5 cursor-pointer relative -z-0 select-none">
              {question}
              <Image
                src={`/assets/icons/show.svg`}
                alt="show"
                width={10}
                height={10}
              />
              <div className="absolute bottom-0 -left-5 -z-10">
                <Image src={Pengapit} alt="pengapit" className="w-12" />
              </div>
            </div>
          </div>
        </div>

        {/* Jawab */}
        <div>
          {showBubble && (
            <div className="flex flex-row-reverse items-center gap-2 w-full mt-3">
              <Image
                src={Logo}
                alt="faq 1"
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="font-normal bg-accent px-5 py-3 rounded-2xl cursor-pointer select-none">
                {answer}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Faq;
