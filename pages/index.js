import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Logo from "@/public/assets/images/logo.png";
import Banner from "@/public/assets/images/banner1.jpg";
import ArrowDown from "@/public/assets/icons/arrowdown.svg";
import Head from "next/head";
import Isearch from "@/public/assets/icons/search.svg";
import Ihome from "@/public/assets/icons/ihome.svg";
import Artikel from "./component/artikel/artikel";
import Thumbnail from "@/public/assets/images/thumbnail.png";

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
          <div className="w-full flex h-auto flex-col gap-5 items-center 2xl:items-stretch">
            <div className="flex items-center gap-10 justify-between mt-20 2xl:justify-between 2xl:mx-16">
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
              <div className="flex gap-20 text-primary items-center justify-between">
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

            <div className="flex items-center gap-5 w-full">
              <div className="h-[0.5px] bg-primary w-full ml-16"></div>
              <div>Artikel</div>
              <div className="h-[0.5px] bg-primary w-full mr-16"></div>
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

          <div className="w-full flex flex-col gap-5 items-center 2xl:items-stretch mt-6">
            <div className="flex items-center gap-10 justify-around">
              <div className="w-full max-w-screen-xl flex justify-between flex-col">
                <div className="font-medium text-xl">Postingan Terbaru</div>
                <div className="flex gap-2 my-1">
                  <Image src={Ihome} alt="ihome" />
                  <p>Home</p>
                </div>
                <div className="w-full flex gap-10 justify-between flex-wrap">
                  <div className="max-w-sm">
                    <Artikel
                      thumbnail={Thumbnail}
                      kategori="IT"
                      judul="Revolusi Artificial Intelligence"
                      date="12 Oktober 2023"
                      views={1200}
                      descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                    />
                  </div>
                  <div className="max-w-sm">
                    <Artikel
                      thumbnail={Thumbnail}
                      kategori="Jurnal"
                      judul="Revolusi Artificial Intelligence"
                      date="12 Oktober 2023"
                      views={1200}
                      descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                    />
                  </div>
                  <div className="max-w-sm">
                    <Artikel
                      thumbnail={Thumbnail}
                      kategori="Info"
                      judul="Revolusi Artificial Intelligence"
                      date="12 Oktober 2023"
                      views={1200}
                      descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                    />
                  </div>
                  <div className="max-w-sm">
                    <Artikel
                      thumbnail={Thumbnail}
                      kategori="Info"
                      judul="Revolusi Artificial Intelligence"
                      date="12 Oktober 2023"
                      views={1200}
                      descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                    />
                  </div>
                  <div className="max-w-sm">
                    <Artikel
                      thumbnail={Thumbnail}
                      kategori="Info"
                      judul="Revolusi Artificial Intelligence"
                      date="12 Oktober 2023"
                      views={1200}
                      descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                    />
                  </div>
                  <div className="max-w-sm">
                    <Artikel
                      thumbnail={Thumbnail}
                      kategori="Info"
                      judul="Revolusi Artificial Intelligence"
                      date="12 Oktober 2023"
                      views={1200}
                      descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
