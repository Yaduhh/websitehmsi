import React from "react";
import Image from "next/image";
import Accent from "@/public/assets/images/accentgaleri.png";

const Galeri = ({ galeri }) => {
  return (
    <>
      <div className="w-full h-auto md:h-screen bg-primary px-6 md:px-16 relative overflow-hidden -z-0 flex flex-col justify-center max-sm:pb-10">
        <div className="w-full absolute left-0 -bottom-36 opacity-20 -z-10">
          <Image src={Accent} alt="galeri" />
        </div>
        <p className="text-start text-2xl 2xl:text-3xl text-white pt-16 pb-4 uppercase font-semibold">
          Galeri Kegiatan
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-0 md:mx-14 2xl:mx-0 2xl:gap-8 gap-5 text-white">
          {galeri.map((galeri, index) => (
            <div className=" hover:cursor-pointer" key={index}>
              <div className="zoom-effect rounded-3xl ">
                <Image
                  src={galeri.image}
                  alt={galeri.title}
                  className="rounded-3xl kotak"
                />
              </div>
              <p className="text-base 2x:text-xl mt-2 font-medium tracking-wide">
                {galeri.title}
              </p>
              <p className="text-xs 2xl:text-base opacity-50">{galeri.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Galeri;
