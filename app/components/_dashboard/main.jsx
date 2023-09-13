"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

import {
  MdPerson,
  MdDesignServices,
  MdDiversity3,
  MdEmail,
  MdStorage,
  MdLogout,
  MdSpaceDashboard,
  MdArticle,
} from "react-icons/md";

const Profile = dynamic(() => import("./profileDashboard"));
const HomeDashboard = dynamic(() => import("./homeDashboard"));
const ServiceDashboard = dynamic(() => import("./serviceDashboard"));
const ArsipdriveDashboard = dynamic(() => import("./arsipdriveDashboard"));
const SuratDashboard = dynamic(() => import("./suratDashboard"));
const KepengurusanDashboard = dynamic(() => import("./kepengurusanDashboard"));
const ArtikelDashboard = dynamic(() => import("./artikelDashboard"));

export default function Main() {
    const router = useRouter();

    const { data: session, status, update } = useSession();

    const [newName, setNewName] = useState("");
    const [activeMenu, setActiveMenu] = useState(1);

    async function handleSignOut() {
      try {
        await signOut({ callbackUrl: "/login" });
      } catch (error) {
        console.error("Error signing out:", error);
        res.status(500).end();
      }
    }

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
    <>{/* HMSI */}
    <div className="w-full 2xl:px-14 px-10 mt-6 flex justify-between gap-10">
        <div className="w-[20%] flex flex-col 2xl:gap-20 gap-2 border-2 bg-white border-gray-400 shadow-inner rounded-3xl h-[85vh] 2xl:p-10 p-6 relative">
          {/* HMSI */}
          <div className="text-primary flex flex-col gap-2">
            <p className="text-xl text-gray-400 font-medium 2xl:mb-2 mb-1">
              HMSI
            </p>
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
                    <MdDesignServices size={30} />
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
                    <MdDiversity3 size={30} />
                    <div>Kepengurusan</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Fitur */}
          <div className="text-primary flex flex-col gap-2">
            <p className="text-xl text-gray-400 font-medium 2xl:mb-2 mb-1">
              Fitur
            </p>
            <ul className="cursor-pointer space-y-1">
              <li>
                <a onClick={() => setActiveMenu((prev) => (prev = 4))}>
                  <div
                    className={`flex items-center gap-2 hover:text-accent duration-200 px-3 py-1 ${
                      activeMenu === 4 ? "bg-primary text-white rounded-xl" : ""
                    }`}
                  >
                    <MdEmail size={30} />
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
                    <MdStorage size={30} />
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
            <p className="text-xl text-gray-400 font-medium 2xl:mb-2 mb-1">
              Akun
            </p>
            <ul className="cursor-pointer space-y-1">
              <li>
                <a onClick={() => setActiveMenu((prev) => (prev = 7))}>
                  <div
                    className={`flex items-center gap-2 hover:text-accent duration-200 px-3 py-1 ${
                      activeMenu === 7 ? "bg-primary text-white rounded-xl" : ""
                    }`}
                  >
                    <MdPerson size={30} />
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
                    <MdLogout size={30} />
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
                <MdDesignServices size={50} />
                <div className="text-4xl tracking-wide">Service</div>
              </div>
            )}
            {activeMenu == 3 && (
              <div className="flex items-center gap-3">
                <MdDiversity3 size={50} />
                <div className="text-4xl tracking-wide">Kepengurusan</div>
              </div>
            )}
            {activeMenu == 4 && (
              <div className="flex items-center gap-3">
                <MdEmail size={50} />
                <div className="text-4xl tracking-wide">Buat Surat</div>
              </div>
            )}
            {activeMenu == 5 && (
              <div className="flex items-center gap-3">
                <MdStorage size={50} />
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
                <MdPerson size={50} />
                <div className="text-4xl tracking-wide">Profile</div>
              </div>
            )}
          </div>
          <div className="w-full flex flex-col border-2 bg-white border-gray-400 shadow-inner 2xl:rounded-3xl rounded-xl h-[75vh] 2xl:h-[78vh] 2xl:p-10 p-3 relative">
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
    </>
    )

}