import React from "react";
import Logo from "@/public/assets/images/logo.png";
import ArrowDown from "@/public/assets/icons/arrowdown.svg";
import Accentgaleri from "@/public/assets/images/accentgaleri.png";
import Image from "next/image";

const Cover = () => {
  return (
    <section
      id="beranda"
      className="bg-center relative bg-cover bg-opacity-75 flex w-full overflow-hidden h-screen items-center justify-center gap-5"
      style={{ backgroundImage: "url('/assets/images/cover.jpg')" }}
    >
      <Image
        src={Accentgaleri}
        alt="accent"
        className="absolute bottom-0 md:-bottom-64 left-0 opacity-50 scale-150 md:scale-100 "
      />
      <div className="flex flex-col justify-center items-center gap-5 mt-10">
        <Image src={Logo} alt="logo" width={270} quality={100} />
        <div className="text-center text-white text-sm">
          <div>Himpunan Mahasiswa Sistem Informasi</div>
          <div>Universitas Pamulang</div>
        </div>
        <div className="animate-bounce">
          <Image src={ArrowDown} alt="logo" width={40} />
        </div>
        <div className="text-white text-lg font-thin">Welcome Sobat ASIK</div>
      </div>
    </section>
  );
};

export default Cover;
