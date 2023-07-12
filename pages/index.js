import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.png";
import Banner from "@/public/assets/images/banner1.jpg";
import ArrowDown from "@/public/assets/icons/arrowdown.svg";
import Head from "next/head";
import Isearch from "@/public/assets/icons/search.svg";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>HMSI UNPAM</title>
      </Head>
      <main>
        {/* landing Cover */}
        <section
          id="beranda"
          className="bg-center bg-cover bg-opacity-75 flex w-full overflow-hidden h-screen items-center justify-center gap-5"
          style={{ backgroundImage: "url('/assets/images/cover.jpg')" }}
        >
          <div className="flex flex-col justify-center items-center gap-5 mt-10">
            <Image src={Logo} alt="logo" width={270} />
            <div className="text-center text-white text-sm">
              <div>Himpunan Mahasiswa Sistem Informasi</div>
              <div>Universitas Pamulang</div>
            </div>
            <div className="animate-bounce">
              <Image src={ArrowDown} alt="logo" width={40} />
            </div>
            <div className="text-white text-lg font-thin">
              Welcome Sobat ASIK
            </div>
          </div>
        </section>

        <section id="artikel">
          <div className="w-full flex h-screen flex-col gap-5 ">
            <div className="flex items-center gap-10 justify-around mt-20 2xl:justify-between 2xl:mx-16">
              <form className="flex">
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
              <div className="flex gap-20 text-primary items-center">
                <Link
                  href="/link"
                  className="bg-secondary px-6 py-2 rounded-full text-white"
                >
                  Semua
                </Link>
                <Link href="/link">Jurnal</Link>
                <Link href="/link">Teknologi</Link>
                <Link href="/link">Informasi Prodi</Link>
                <Link href="/link">Acara</Link>
              </div>
            </div>

            <div className="flex items-center gap-5 mx-16">
              <div className="h-[0.5px] bg-primary w-full"></div>
              <div>Artikel</div>
              <div className="h-[0.5px] bg-primary w-full"></div>
            </div>

            {/* Banner */}
            <div className="w-full flex justify-center">
              <div className="mx-16 max-w-screen-xl">
                <div className=" h-80">
                  <Image src={Banner} alt="banner" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
