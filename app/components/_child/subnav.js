import React from "react";
import Link from "next/link";
import Image from "next/image";
import Isearch from "@/public/assets/icons/search.svg";

const Subnav = () => {
  return (
    <>
      <div className="md:flex items-center gap-4 justify-between pt-16 2xl:justify-between 2xl:mx-16 xl:mx-14 flex-col">
        <div className="md:flex md:flex-row flex-col w-full justify-between">
          <form className="flex md:px-0 px-4 max-sm:mb-5">
            <input
              type="text"
              placeholder="Mau mencari apa ges ..."
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm w-full"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 text-white rounded-full bg-secondary hover:bg-opacity-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-normal flex items-center gap-2"
            >
              <Image src={Isearch} alt="isearch" width={20} />
            </button>
          </form>

          {/* subnav */}
          <div className="flex truncate text-sm md:text-base max-sm:mb-3 gap-10 md:gap-20 text-primary items-center justify-between max-sm:overflow-auto max-sm:px-4">
            <Link
              href="/link"
              className="bg-secondary px-6 py-2 rounded-full text-white"
            >
              Semua
            </Link>
            <Link href="/#link">Jurnal</Link>
            <Link href="/#link">Teknologi</Link>
            <Link href="/#link">Acara</Link>
            <Link href="/#link">Informasi Prodi</Link>
          </div>
        </div>

        <div className="flex items-center gap-5 w-full">
          <div className="h-[0.5px] bg-primary w-full"></div>
          <div>Artikel</div>
          <div className="h-[0.5px] bg-primary w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Subnav;
