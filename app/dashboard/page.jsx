"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Logo from "@/public/assets/images/logohmsi.png";
import Image from "next/image";
import { CgUserlane } from "react-icons/cg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa";
import { GiLetterBomb } from "react-icons/gi";
import { PiHardDrivesFill } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import Profile from "../components/_dashboard/profile";
import HomeDashboard from "../components/_dashboard/homeDashboard";

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

  useEffect(() => {
    // Check if user is not logged in and redirect to the login page
    if (!session) {
      router.replace("/login");
    }
  }, [session, router]);

  // Render loading state or null if session is not yet loaded
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // Render null if session is not available (user not logged in)
  if (!session) {
    return null;
  }

  const [activePage, setActivePage] = useState("dashboard");
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  return (
    <>
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
            <div
              className={`flex items-end gap-2 text-lg cursor-pointer ${
                activePage === "dashboard"
                  ? "bg-primary text-white rounded-xl w-full px-3 py-1"
                  : "px-3 py-1"
              }`}
              onClick={() => handlePageChange("dashboard")}
            >
              <MdSpaceDashboard size={30} />
              <div>Dashboard</div>
            </div>
            <div
              className={`flex items-end gap-2 text-lg cursor-pointer ${
                activePage === "services"
                  ? "bg-primary text-white rounded-xl w-full px-3 py-1"
                  : "px-3 py-1"
              }`}
              onClick={() => handlePageChange("services")}
            >
              <RiServiceFill size={30} />
              <div>Service</div>
            </div>
            <div
              className={`flex items-end gap-2 text-lg cursor-pointer ${
                activePage === "kepengurusan"
                  ? "bg-primary text-white rounded-xl w-full px-3 py-1"
                  : "px-3 py-1"
              }`}
              onClick={() => handlePageChange("kepengurusan")}
            >
              <FaNetworkWired size={30} />
              <div>Kepengurusan</div>
            </div>
          </div>

          {/* Fitur */}
          <div className="text-primary flex flex-col gap-2">
            <p className="text-xl text-gray-400 font-medium mb-2">Fitur</p>
            <div
              className={`flex items-end gap-2 text-lg cursor-pointer ${
                activePage === "buat-surat"
                  ? "bg-primary text-white rounded-xl w-full px-3 py-1"
                  : "px-3 py-1"
              }`}
              onClick={() => handlePageChange("buat-surat")}
            >
              <GiLetterBomb size={30} />
              <div>Buat Surat</div>
            </div>
            <div
              className={`flex items-end gap-2 text-lg cursor-pointer ${
                activePage === "arsip-drive"
                  ? "bg-primary text-white rounded-xl w-full px-3 py-1"
                  : "px-3 py-1"
              }`}
              onClick={() => handlePageChange("arsip-drive")}
            >
              <PiHardDrivesFill size={30} />
              <div>Arsip Drive</div>
            </div>
          </div>

          {/* Akun */}
          <div className="text-primary flex flex-col gap-2">
            <div
              className={`flex items-end gap-2 text-lg cursor-pointer ${
                activePage === "profile"
                  ? "bg-primary text-white rounded-xl w-full px-3 py-1"
                  : "px-3 py-1"
              }`}
              onClick={() => handlePageChange("profile")}
            >
              <CgUserlane size={30} />
              <div>Profile</div>
            </div>
            <div className="flex items-end gap-2 text-lg cursor-pointer">
              <button
                className="flex items-center gap-2 hover:text-gray-500 duration-200 px-3 py-1"
                onClick={() => handleSignOut()}
              >
                <BiLogOut size={30} />
                <div>Keluar</div>
              </button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="absolute bottom-3 translate-x-8 2xl:translate-x-14 font-medium">
            <p className="text-gray-400">© 2023 - HMSI</p>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="w-full flex flex-col 2xl:gap-4 gap-3">
          <div className="flex items-center gap-4 text-lg cursor-pointer text-white">
            <MdSpaceDashboard size={50} />
            <div className="text-4xl tracking-wide">Dashboard</div>
          </div>
          <div className="w-full flex flex-col gap-20 border-2 bg-white border-gray-400 shadow-inner rounded-3xl h-[75vh] 2xl:h-[78vh] p-10 relative">
            <HomeDashboard />
          </div>
        </div>
      </div>

      {/* <div className="text-4xl">Hi {session?.user.name}</div> */}
      {/* <input
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
