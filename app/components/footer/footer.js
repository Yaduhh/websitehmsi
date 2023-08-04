import React from "react";
import Logo from "@/public/assets/images/logo footer.png";
import Accent from "@/public/assets/images/accentfooter.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto md:h-40 md:py-0 py-10 bg-primary flex flex-col md:flex-row justify-between items-center relative px-12 overflow-hidden -z-0">
        <div className="flex gap-3 md:gap-14 text-base md:text-lg text-white max-sm:flex-col max-sm:mt-20">
          <Link href="#link">Home</Link>
          <Link href="#link">Kontak</Link>
          <Link href="#link">Artikel</Link>
          <Link href="#link">Galeri</Link>
        </div>
        <div className="flex flex-col items-end gap-2 mt-8 md:mt-5">
          <div className="flex gap-5 w-full justify-center md:justify-end">
            <Link href="#linktiktok">
              <Image
                src={`/assets/icons/tiktok.svg`}
                alt="logo"
                width={30}
                height={300}
                className="ifooter"
              />
            </Link>
            <Link href="#inilinkinstagram">
              <Image
                src={`/assets/icons/iinstagram.svg`}
                alt="logo"
                width={30}
                height={300}
                className="ifooter"
              />
            </Link>
            <Link href="#inilinkwhatsapp">
              <Image
                src={`/assets/icons/iwhatsapp.svg`}
                alt="logo"
                width={30}
                height={300}
                className="ifooter"
              />
            </Link>
          </div>
          <p className="text-white text-xs font-light tracking-widest select-none max-sm:mt-5">
            Copyright © HMSIUNPAM 2023
          </p>
        </div>
        <div className="absolute inset-x-1/3 items-center px-0 md:px-36 2xl:px-56 -z-0">
          <Link href="/">
            <Image src={Logo} alt="logo" width={200} />
          </Link>
        </div>
        <div className="absolute inset-x-48 2xl:inset-x-56 -z-10 opacity-75">
          <Image src={Accent} alt="accent" />
        </div>
      </div>
    </>
  );
};

export default Footer;
