import React from "react";
import Link from "next/link";
import Logo from "@/public/assets/images/logohmsi.png";
import Login from "@/public/assets/icons/login.svg";
import Image from "next/image";
import { Poppins } from "next/font/google";

//  className={`w-full ${poppins.className}`}

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="bg-gray-200 shadow-sm fixed top-0 w-full">
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
                <Link href="/link">Profil</Link>
                <Link href="/link">Galeri</Link>
                <Link href="/link">Tentang</Link>
                <Link href="/link">FAQ</Link>
              </div>
              {/* Login */}
              <div className="flex">
                <button className="flex gap-3 items-center bg-primary px-5 py-2 text-white rounded-xl">
                  <Image src={Login} alt="login" />
                  <p>Masuk</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
