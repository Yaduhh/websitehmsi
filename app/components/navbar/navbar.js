"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/public/assets/images/logohmsi.png";
import Login from "@/public/assets/icons/login.svg";
import Image from "next/image";
import { useState } from "react";
import { CgMenuHotdog } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* Navbar md - 2xl */}
      <div className="w-full hidden lg:flex">
        <nav className="bg-slate-200 shadow-sm fixed top-0 w-full z-50 backdrop-blur-sm">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center w-full justify-between">
                <div className="flex-shrink-0">
                  <Link href="/" className="text-white font-bold text-xl">
                    <Image src={Logo} alt="logo" width={130} />
                  </Link>
                </div>
                <div className="flex gap-10 text-lg text-primary">
                  <Link href="#beranda">Beranda</Link>
                  <Link href="#artikel">Artikel</Link>
                  <Link href="/#profil">Profil</Link>
                  <Link href="/#galeri">Galeri</Link>
                  <Link href="/#tentang">Tentang</Link>
                  <Link href="/#faq">FAQ</Link>
                </div>
                {/* Login */}
                <div className="flex">
                  <Link
                    href="/login"
                    className="flex gap-3 items-center bg-primary hover:bg-secondary duration-200 px-5 py-2 text-white rounded-3xl"
                  >
                    <Image src={Login} alt="login" />
                    <p>Masuk</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Navbar Mobile Only */}
      <nav className="bg-gray-200 p-4 fixed top-0 z-30 w-screen md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full px-3">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                <Image src={Logo} alt="logo" width={130} />
              </Link>
            </div>
            <button className="text-primary md:hidden" onClick={toggleMenu}>
              <CgMenuHotdog size={30} />
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#">Home</Link>
            <Link href="#">Home</Link>
            <Link href="#">Home</Link>
            <Link href="#">Home</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <Link href="#" className="block p-2">
              Beranda
            </Link>
            <Link href="#" className="block p-2">
              Artikel
            </Link>
            <Link href="#" className="block p-2">
              Galeri
            </Link>
            <Link href="#" className="block p-2">
              tentang
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
