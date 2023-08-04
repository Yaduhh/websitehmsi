import React from "react";
import MediaPartner from "@/public/assets/images/mediapartner.png";
import Image from "next/image";

const Mediapartner = () => {
  return (
    <div className="w-full py-10 overflow-hidden flex flex-col gap-8">
      <p className="text-center text-4xl">Media Partner</p>
      <div className="flex justify-start md:justify-center items-start md:items-center gap-10 max-sm:overflow-auto max-sm:px-14">
        <Image src={MediaPartner} alt="media partner" width={300} />
        <Image src={MediaPartner} alt="media partner" width={300} />
        <Image src={MediaPartner} alt="media partner" width={300} />
        <Image src={MediaPartner} alt="media partner" width={300} />
      </div>
      <div className="w-full flex justify-center">
        <button className="px-5 py-3 bg-primary rounded-3xl text-white font-light hover:bg-secondary duration-200">
          Gabung Media Partner
        </button>
      </div>
    </div>
  );
};

export default Mediapartner;
