"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Head from "next/head";
import Logo from "@/public/assets/images/logohmsi.png";
import Image from "next/image";
import { CgUserlane } from "react-icons/cg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdSpaceDashboard, MdArticle } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";
import { PiHardDrivesFill } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import Profile from "../components/_dashboard/profileDashboard";
import HomeDashboard from "../components/_dashboard/homeDashboard";
import ServiceDashboard from "../components/_dashboard/serviceDashboard";
import ArsipdriveDashboard from "../components/_dashboard/arsipdriveDashboard";
import SuratDashboard from "../components/_dashboard/suratDashboard";
import KepengurusanDashboard from "../components/_dashboard/kepengurusanDashboard";
import ArtikelDashboard from "../components/_dashboard/artikelDashboard";

export default function DashboardPage() {
  const router = useRouter();
  const [newName, setNewName] = useState("");
  const { data: session, status, update } = useSession();
  console.log("useSession Hook session object", session);

  async function handleSignOut() {
    try {
      await signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.error("Error signing out:", error);
      res.status(500).end();
    }
  }

  const [activeMenu, setActiveMenu] = useState(1);

  useEffect(() => {
    // Check if user is not logged in and redirect to the login page
    if (!session) {
      router.replace("/login");
    }
  }, [session, router]);

  // Render loading state or null if session is not yet loaded
  if (status === "loading") {
    return (
      <p className="flex w-full h-screen items-center justify-center">
        Loading...
      </p>
    );
  }

  // Render null if session is not available (user not logged in)
  if (!session) {
    return null;
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Dashboard</title>
      </Head>

      <nav className="w-full bg-gray-50 shadow-xl flex py-1 2xl:py-4 md:px-10 2xl:px-14 justify-between items-center">
        <div className="2xl:w-44 w-36">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex gap-3 items-center text-primary">
          <CgUserlane size={40} />
          <div className="text-xl">Hi, {session?.user.name}</div>
          <button>
            <IoIosArrowDropdownCircle size={30} />
          </button>
        </div>
      </nav>

      <div className="w-full h-80 bg-primary absolute top-0 left-0 -z-30"></div>

      <div className="w-full 2xl:px-14 px-10 mt-6 flex justify-between gap-10">
        <div className="w-[20%] flex flex-col 2xl:gap-20 gap-10 border-2 bg-white border-gray-400 shadow-inner rounded-3xl h-[85vh] 2xl:p-10 p-6 relative">
          {/* HMSI */}
          <div className="text-primary flex flex-col gap-2">
            <p className="text-xl text-gray-400 font-medium mb-2">HMSI</p>
            <ul className="cursor-pointer space-y-1">
              <li>
                <a onClick={() => setActiveMenu((prev) => (prev = 1))}>
                  <div
                    className={`flex items-center gap-2 hover:text-accent duration-200 px-3 py-1 ${
                      activeMenu === 1 ? "bg-primary text-white rounded-xl" : ""
                    }`}
                  >
                    <MdSpaceDashboard size={30} />
                    <div>Dashboard</div>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={() => setActiveMenu((prev) => (prev = 2))}>
                  <div
                    className={`flex items-center gap-2 hover:text-accent duration-200 px-3 py-1 ${
                      activeMenu === 2 ? "bg-primary text-white rounded-xl" : ""
                    }`}
                  >
                    <RiServiceFill size={30} />
                    <div>Service</div>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={() => setActiveMenu((prev) => (prev = 3))}>
                  <div
                    className={`flex items-center gap-2 hover:text-accent duration-200 px-3 py-1 ${
                      activeMenu === 3 ? "bg-primary text-white rounded-xl" : ""
                    }`}
                  >
                    <FaNetworkWired size={30} />
                    <div>Kepengurusan</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Fitur */}
          <div className="text-primary flex flex-col gap-2">
            <p className="text-xl text-gray-400 font-medium mb-2">Fitur</p>
            <ul className="cursor-pointer space-y-1">
              <li>
                <a onClick={() => setActiveMenu((prev) => (prev = 4))}>
                  <div
                    className={`flex items-center gap-2 hover:text-accent duration-200 px-3 py-1 ${
                      activeMenu === 4 ? "bg-primary text-white rounded-xl" : ""
                    }`}
                  >
                    <GiLetterBomb size={30} />
                    <div>Buat Surat</div>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={() => setActiveMenu((prev) => (prev = 5))}>
                  <div
                    className={`flex items-center gap-2 hover:text-accent duration-200 px-3 py-1 ${
                      activeMenu === 5 ? "bg-primary text-white rounded-xl" : ""
                    }`}
                  >
                    <PiHardDrivesFill size={30} />
                    <div>Arsip Drive</div>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={() => setActiveMenu((prev) => (prev = 6))}>
                  <div
                    className={`flex items-center gap-2 hover:text-accent duration-200 px-3 py-1 ${
                      activeMenu === 6 ? "bg-primary text-white rounded-xl" : ""
                    }`}
                  >
                    <MdArticle size={30} />
                    <div>Artikel</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Akun */}
          <div className="text-primary flex flex-col gap-2">
            <p className="text-xl text-gray-400 font-medium mb-2">Akun</p>
            <ul className="cursor-pointer space-y-1">
              <li>
                <a onClick={() => setActiveMenu((prev) => (prev = 7))}>
                  <div
                    className={`flex items-center gap-2 hover:text-accent duration-200 px-3 py-1 ${
                      activeMenu === 7 ? "bg-primary text-white rounded-xl" : ""
                    }`}
                  >
                    <CgUserlane size={30} />
                    <div>Profile</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-end gap-2 text-lg cursor-pointer">
                  <button
                    className="flex items-center gap-2 hover:text-gray-500 duration-200 px-3 py-1"
                    onClick={() => handleSignOut()}
                  >
                    <BiLogOut size={30} />
                    <div>Keluar</div>
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="absolute bottom-3 translate-x-8 2xl:translate-x-14 font-medium">
            <p className="text-gray-400">© 2023 - HMSI</p>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="w-full flex flex-col 2xl:gap-4 gap-3">
          <div className="flex items-center gap-4 text-lg cursor-pointer text-white">
            {activeMenu == 1 && (
              <div className="flex items-center gap-3">
                <MdSpaceDashboard size={50} />
                <div className="text-4xl tracking-wide">Dashboard</div>
              </div>
            )}
            {activeMenu == 2 && (
              <div className="flex items-center gap-3">
                <RiServiceFill size={50} />
                <div className="text-4xl tracking-wide">Service</div>
              </div>
            )}
            {activeMenu == 3 && (
              <div className="flex items-center gap-3">
                <FaNetworkWired size={50} />
                <div className="text-4xl tracking-wide">Kepengurusan</div>
              </div>
            )}
            {activeMenu == 4 && (
              <div className="flex items-center gap-3">
                <GiLetterBomb size={50} />
                <div className="text-4xl tracking-wide">Buat Surat</div>
              </div>
            )}
            {activeMenu == 5 && (
              <div className="flex items-center gap-3">
                <PiHardDrivesFill size={50} />
                <div className="text-4xl tracking-wide">Arsip Drive</div>
              </div>
            )}
            {activeMenu == 6 && (
              <div className="flex items-center gap-3">
                <MdArticle size={50} />
                <div className="text-4xl tracking-wide">Artikel</div>
              </div>
            )}
            {activeMenu == 7 && (
              <div className="flex items-center gap-3">
                <CgUserlane size={50} />
                <div className="text-4xl tracking-wide">Profile</div>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col border-2 bg-white border-gray-400 shadow-inner rounded-3xl h-[75vh] 2xl:h-[78vh] p-10 relative">
            {activeMenu == 1 && <HomeDashboard />}
            {activeMenu == 2 && <ServiceDashboard />}
            {activeMenu == 3 && <KepengurusanDashboard />}
            {activeMenu == 4 && <SuratDashboard />}
            {activeMenu == 5 && <ArsipdriveDashboard />}
            {activeMenu == 6 && <ArtikelDashboard session={session} />}
            {activeMenu == 7 && <Profile session={session} />}
          </div>
        </div>
      </div>

      {/* <div className="text-4xl">Hi {session?.user.name}</div>
      <input
        type="text"
        placeholder="update nama"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button
        className="px-4 py-3 rounded-xl bg-accent text-primary"
        onClick={() => update({ name: newName })}
      >
        Update nama
      </button> */}
    </>
  );
}
