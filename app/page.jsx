"use client";

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
import { useState, useEffect } from "react";
import NavProfil from "./components/_child/navprofil";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize(); // Set initial window width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Ini jumlah item yang ingin ditampilkan sesuai dengan lebar layar
  let numItemsToDisplay = 3; // Jumlah default pada lebar layar terkecil
  if (windowWidth >= 640) {
    numItemsToDisplay = 2;
  }
  if (windowWidth >= 1024) {
    numItemsToDisplay = 6;
  }
  if (windowWidth >= 1440) {
    numItemsToDisplay = 8;
  }

  const artikel = [
    {
      id: 1,
      thumbnail: Thumbnail,
      category: "IT",
      title: "Revolusi Artificial Intelligence",
      date: "12 Oktober 2023",
      views: 1200,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai",
    },
    {
      id: 2,
      thumbnail: Thumbnail2,
      category: "Jurnal",
      title: "How to be Programming Amatir",
      date: "12 Oktober 2023",
      views: 999,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai",
    },
    {
      id: 3,
      thumbnail: Thumbnail3,
      category: "Event",
      title: "SENSASI Sistem Informasi 2023",
      date: "12 Oktober 2023",
      views: 999,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai",
    },
    {
      id: 4,
      thumbnail: Thumbnail,
      category: "Informasi Prodi",
      title: "10 Situs Zeus terpercaya",
      date: "12 Oktober 2023",
      views: 999,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai",
    },
    {
      id: 5,
      thumbnail: Thumbnail2,
      category: "Jurnal",
      title: "How to be FrontEnd Web Developher",
      date: "12 Oktober 2023",
      views: 999,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai",
    },
    {
      id: 6,
      thumbnail: Thumbnail3,
      category: "Story",
      title: "BackEnd Developher So Hard",
      date: "12 Oktober 2023",
      views: 999,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai",
    },
    {
      id: 7,
      thumbnail: Thumbnail,
      category: "Event",
      title: "Prodi SI Raih MABA Terbanyak",
      date: "12 Oktober 2023",
      views: 999,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai",
    },
    {
      id: 8,
      thumbnail: Thumbnail2,
      category: "Random",
      title: "Pendaftaran HIMA is Coming",
      date: "12 Oktober 2023",
      views: 999,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets contai",
    },
  ];

  const displayedArtikel = artikel.slice(0, numItemsToDisplay);

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
      answer: "Mencintai banteng merah, karena PDH kita merah",
      foto: Peoplefaq2,
    },
    {
      question: "Benefit apa yang didapat kalau join HMSI ?",
      answer: "Minimal bisalah jadi jari kelingkingnya rektor",
      foto: Peoplefaq3,
    },
    {
      question: "Di HMSI bisa sekalian nyari do'i atau jodoh ga min?",
      answer: "Jangankan kamu, Mimin aje masih jomblo :(",
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

        <div className="w-full flex flex-col gap-5 items-stretch 2xl:items-stretch mt-6 overflow-hidden md:px-0 px-6">
          <div className="flex items-center gap-10 justify-around">
            <div className="w-full 2xl:px-28 flex justify-between flex-col">
              <div className="font-medium text-xl 2xl:px-0 xl:px-12">
                Postingan Terbaru
              </div>
              <div className="flex gap-2 my-1 2xl:px-0 xl:px-12">
                <Image src={Ihome} alt="ihome" />
                <p>Home</p>
              </div>
            </div>
          </div>
          <div className="w-full gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-stretch md:justify-items-center px-0 md:px-10 2xl:px-28">
            {displayedArtikel.map((item, index) => (
              <div className="max-w-sm" key={index}>
                <Artikel
                  thumbnail={item.thumbnail}
                  category={item.category}
                  title={item.title}
                  date={item.date}
                  views={item.views}
                  description={item.description}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center mt-2 md:mt-5 gap-5 md:flex-row flex-col">
            <div className="h-[0.5px] bg-slate-400 w-full ml-16 md:block hidden"></div>
            <div className="flex flex-row items-stretch justify-between text-slate-600 gap-4">
              <Link
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
              >
                Sebelumnya
              </Link>
              <div className="flex gap-2">
                <Link
                  href="#"
                  className="px-4 py-2 border border-gray-300 rounded-xl bg-gray-200"
                >
                  1
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
                >
                  2
                </Link>
                <Link
                  href="#"
                  className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
                >
                  3
                </Link>
              </div>
              <Link
                href="#"
                className="px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-100"
              >
                Selanjutnya
              </Link>
            </div>
            <div className="h-[0.5px] bg-slate-400 w-full mr-16 md:block hidden"></div>
          </div>
        </div>
      </section>

      <section id="profil">
        <div className="w-full flex flex-col gap-7 2xl:gap-5 md:h-screen overflow-hidden h-auto md:py-0 py-10">
          <div className="mt-10 md:mt-20 2xl:mt-24 px-6 2xl:px-14 md:px-10">
            <p className="text-primary font-medium text-2xl 2xl:text-3xl">
              Ada siapa aja sih di HMSI ?
            </p>
            <p className="max-w-xs text-secondary 2xl:text-lg">
              Himpunan Mahasiswa Sistem Informasi Periode 2022 - 2023
            </p>
          </div>
          <NavProfil />
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
