import React from "react";
import Link from "next/link";
import Navbar from "./components/navbar/navbar";
import Head from "next/head";
import Cover from "./components/cover/cover";
import Subnav from "./components/_child/subnav";
import Banner from "./components/_child/banner";
import Baliho1 from "@/public/assets/images/banner1.jpg";
import Baliho2 from "@/public/assets/images/banner2.jpg";
import Baliho3 from "@/public/assets/images/banner3.jpg";
import Baliho4 from "@/public/assets/images/banner4.jpg";
import Image from "next/image";
import Ihome from "@/public/assets/icons/ihome.svg";
import Artikel from "./components/artikel/artikel";
import Thumbnail from "@/public/thumbnail/thumbnail.png";
import Thumbnail2 from "@/public/thumbnail/thumbnail2.jpg";
import Thumbnail3 from "@/public/thumbnail/thumbnail3.jpg";
import Kegiatan1 from "@/public/galeri/kegiatan1.jpg";
import Kegiatan2 from "@/public/galeri/kegiatan2.jpg";
import Kegiatan3 from "@/public/galeri/kegiatan3.jpg";
import Kegiatan4 from "@/public/galeri/kegiatan4.jpg";
import Kegiatan5 from "@/public/galeri/kegiatan5.jpg";
import Kegiatan6 from "@/public/galeri/kegiatan6.jpg";
import Peoplefaq1 from "@/public/assets/images/peoplefaq1.png";
import Peoplefaq2 from "@/public/assets/images/peoplefaq2.png";
import Peoplefaq3 from "@/public/assets/images/peoplefaq3.png";
import Peoplefaq4 from "@/public/assets/images/peoplefaq4.png";
import Peoplefaq5 from "@/public/assets/images/peoplefaq5.png";
import Person1 from "@/public/assets/images/person1.png";
import Person2 from "@/public/assets/images/person2.png";
import Person3 from "@/public/assets/images/person3.png";
import Person4 from "@/public/assets/images/person4.png";
import Person5 from "@/public/assets/images/person5.png";
import SwiperComponent from "./components/swiper/swiper";
import Galeri from "./components/galeri/galeri";
import Mediapartner from "./components/mediapart/mediapartner";
import Faq from "./components/faq/faq";
import Kontak from "./components/kontakAspirasi/kontak";
import Footer from "./components/footer/footer";

export default function Home() {
  const baliho = [
    {
      id: 1,
      images: Baliho1,
      title: "Ini baliho1",
    },
    {
      id: 2,
      images: Baliho2,
      title: "Ini baliho1",
    },
    {
      id: 3,
      images: Baliho3,
      title: "Ini baliho1",
    },
    {
      id: 4,
      images: Baliho4,
      title: "Ini baliho1",
    },
  ];
  let galeri = [
    {
      image: Kegiatan1,
      title: "Kegiatan Penggandaan Uang",
      date: "12/10/2023",
    },
    {
      image: Kegiatan2,
      title: "Olahraga Bersama HMSI",
      date: "12/10/2023",
    },
    {
      image: Kegiatan3,
      title: "RAKASI With HMSI",
      date: "12/10/2023",
    },
    {
      image: Kegiatan4,
      title: "SENSASI 2023",
      date: "12/10/2023",
    },
    {
      image: Kegiatan5,
      title: "Perlombaan GEMASTIK",
      date: "12/10/2023",
    },
    {
      image: Kegiatan6,
      title: "Rapat Harian HMSI 2023",
      date: "12/10/2023",
    },
  ];

  const faq = [
    {
      question: "Bagaimana cara bergabung ke organinasi HMSI ?",
      answer: "Ikutin aje alur pendaftarannya ngab kalau lagi buka",
      foto: Peoplefaq1,
    },
    {
      question: "Apa saja ketentuan untuk masuk HMSI ?",
      answer: "Anak sistem informasi UNPAM aje",
      foto: Peoplefaq2,
    },
    {
      question: "Benefit apa yang didapat kalau join HMSI ?",
      answer: "Minimal dapet kyubi dan gelar hokage",
      foto: Peoplefaq3,
    },
    {
      question: "Bisa ga nyari jodoh atau doi di organisasi HMSI ?",
      answer: "Mimin aje masih jomblo",
      foto: Peoplefaq4,
    },
    {
      question: "Maksimal join HMSI semester berapa ?",
      answer: "Semester 6 biar gada alesan lama lulus karena organisasi",
      foto: Peoplefaq5,
    },
  ];

  let slides = [
    {
      id: 1,
      nama: "Dila Intan P Balap",
      title: "Bidang Pengkaderan Organisasi",
      image: Person1,
    },
    {
      id: 2,
      nama: "Vega Keren",
      title: "Bidang Huminkom",
      title: "huminkom",
      image: Person2,
    },
    {
      id: 3,
      nama: "Fazry Ramadhan",
      title: "Bidang PAO",
      image: Person3,
    },
    {
      id: 4,
      nama: "Anggara Budi",
      title: "Marga Anggara",
      image: Person4,
    },
    {
      id: 6,
      nama: "Firda Nur Aprilia",
      title: "Ketua Umum",
      image: Person5,
    },
  ];
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>HMSI UNPAM</title>
      </Head>
      <Navbar />

      <Cover />

      <section id="artikel">
        <div className="w-full flex h-auto flex-col gap-5 items-stretch 2xl:items-stretch ">
          <Subnav />
          <Banner baliho={baliho} />
        </div>

        <div className="w-full flex flex-col gap-5 items-center 2xl:items-stretch mt-6 overflow-hidden md:px-0 px-6">
          <div className="flex items-center gap-10 justify-around">
            <div className="w-full 2xl:px-28 flex justify-between flex-col">
              <div className="font-medium text-xl 2xl:px-0 xl:px-12">
                Postingan Terbaru
              </div>
              <div className="flex gap-2 my-1 2xl:px-0 xl:px-12">
                <Image src={Ihome} alt="ihome" />
                <p>Home</p>
              </div>
              <div className="w-full flex gap-10 xl:gap-4 2xl:gap-10 justify-between flex-wrap 2xl:px-0 xl:px-12">
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
                    thumbnail={Thumbnail2}
                    kategori="Jurnal"
                    judul="Revolusi Artificial Intelligence"
                    date="12 Oktober 2023"
                    views={1200}
                    descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                  />
                </div>
                <div className="max-w-sm">
                  <Artikel
                    thumbnail={Thumbnail3}
                    kategori="Info"
                    judul="Revolusi Artificial Intelligence"
                    date="12 Oktober 2023"
                    views={1200}
                    descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                  />
                </div>
                <div className="max-w-sm">
                  <Artikel
                    thumbnail={Thumbnail3}
                    kategori="Info"
                    judul="Revolusi Artificial Intelligence"
                    date="12 Oktober 2023"
                    views={1200}
                    descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                  />
                </div>
                <div className="max-w-sm">
                  <Artikel
                    thumbnail={Thumbnail2}
                    kategori="HOT"
                    judul="Revolusi Artificial Intelligence"
                    date="12 Oktober 2023"
                    views={1200}
                    descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai"
                  />
                </div>
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
              </div>
            </div>
          </div>
          <div className="flex items-center mt-2 md:mt-5 gap-5 md:flex-row flex-col">
            <div className="h-[0.5px] bg-slate-400 w-full ml-16 md:block hidden"></div>
            <div className="flex items-center justify-center text-slate-600 ">
              <Link
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-xl mr-2 hover:bg-gray-100"
              >
                Previous
              </Link>
              <Link
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-xl mr-2 bg-gray-200"
              >
                1
              </Link>
              <Link
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-xl mr-2 hover:bg-gray-100"
              >
                2
              </Link>
              <Link
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-xl mr-2 hover:bg-gray-100"
              >
                3
              </Link>
              <Link
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-xl ml-2 hover:bg-gray-100"
              >
                Next
              </Link>
            </div>
            <div className="h-[0.5px] bg-slate-400 w-full mr-16 md:block hidden"></div>
          </div>
        </div>
      </section>

      <section id="profil">
        <div className="w-full flex flex-col gap-7 2xl:gap-8 md:h-screen overflow-hidden h-auto md:py-0 py-10">
          <div className="mt-10 md:mt-20 2xl:mt-24 px-6 2xl:px-14 md:px-10">
            <p className="text-primary font-medium text-2xl 2xl:text-3xl">
              Ada siapa aja sih di HMSI ?
            </p>
            <p className="max-w-xs text-secondary 2xl:text-lg">
              Himpunan Mahasiswa Sistem Informasi Periode 2022 - 2023
            </p>
          </div>
          <div className="gap-9 items-center flex overflow-auto w-full md:px-10 2xl:px-14 px-6">
            <div className="bg-secondary px-5 py-2 rounded-3xl text-white">
              Semua
            </div>
            <div className="rounded-3xl text-primary">
              <p>Badan Pengurus Harian</p>
            </div>
            <div className="rounded-3xl text-primary">
              Pengkaderan Organisasi
            </div>
            <div className="rounded-3xl text-primary">
              Pengembangan Akademik
            </div>
            <div className="rounded-3xl text-primary">HUMINKOM</div>
            <div className="rounded-3xl text-primary">Kewirausahaan</div>
            <div className="rounded-3xl text-primary">Minat Bakat</div>
          </div>
          <div>
            <SwiperComponent slides={slides} />
          </div>
          <div className="max-sm:mx-6 px-6 flex w-auto max-sm:gap-5 flex-col md:flex-row justify-between items-center bg-gradient-to-r from-primary from-5% via-third via-30% to-blood to-65% rounded-3xl md:px-14 py-7 2xl:py-20 2xl:mt-10 2xl:mx-14 md:mx-10">
            <p className="text-white text-2xl md:text-4xl 2xl:text-5xl max-sm:text-center">
              Ingin Bergabung <br />
              bersama kami di HMSI ?
            </p>
            <button className="bg-primary rounded-3xl max-sm:text-sm px-7 py-2 text-white hover:bg-accent hover:text-blood duration-300">
              <Link href="#pendaftaran">Klik Disini Bro</Link>
            </button>
          </div>
        </div>
      </section>

      {/* Galeri Kegiatan */}
      <section id="galeri">
        <Galeri galeri={galeri} />
      </section>

      {/* Media Partner */}
      <section>
        <Mediapartner />
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="w-full py-10 md:py-20 2xl:py-0 2xl:pb-20 h-auto grid grid-cols-1 md:grid-cols-2 px-0 md:px-12 overflow-hidden">
          <div className="px-6 md:px-12 w-full flex flex-col gap-5">
            <div className="font-semibold text-3xl text-primary">FAQ</div>
            {faq.map((faq, index) => (
              <Faq
                foto={faq.foto}
                question={faq.question}
                answer={faq.answer}
                key={index}
              />
            ))}
          </div>

          {/* KOLOM 2 */}
          <div className="md:px-12 px-6 max-sm:mt-8">
            <div className="text-3xl max-sm:text-center font-semibold text-primary max-sm:my-4">
              Kontak Aspirasi
            </div>
            <Kontak />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
