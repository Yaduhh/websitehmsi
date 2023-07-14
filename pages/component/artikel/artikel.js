import React from "react";
import Image from "next/image";
import Link from "next/link";
import Idate from "@/public/assets/icons/date.svg";
import Iviews from "@/public/assets/icons/views.svg";

const Artikel = ({
  judul,
  thumbnail,
  date,
  views,
  descrip,
  kategori,
  link,
}) => {
  return (
    <div className="bg-white outline-1 outline-secondary rounded-3xl h-auto outline-none outline-offset-0 w-full 2xl:rounded-t-[30px]">
      <div className="w-auto relative">
        <Image src={thumbnail} alt="thumbnail 1" />
        <div className="absolute -z-0 top-2 left-2 px-6 py-1 bg-secondary text-white rounded-tl-3xl rounded-br-3xl">
          {kategori}
        </div>
        <Link
          href="/#link"
          className="bg-primary text-sm hover:bg-slate-500 w-full absolute bottom-0 text-center py-1.5 text-white duration-300 hover:text-secondary"
        >
          Baca Selengkapnya
        </Link>
      </div>
      <div className="mx-5 py-3">
        <div className="text-lg font-medium text-center">{judul}</div>
        <div className="text-sm opacity-75 mb-4 mt-2 text-justify line-clamp-4">
          {descrip}
        </div>
        <div className="w-full h-0.5 bg-slate-600 rounded-full"></div>
        <div className="flex justify-between pt-3 pb-1 text-sm">
          <div className="flex gap-2 items-center">
            <Image src={Idate} alt="idate" width={20} />
            <div>{date}</div>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={Iviews} alt="idate" width={20} />
            <div>{views} Views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel;
