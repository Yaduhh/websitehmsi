import { useState } from "react";

export default function NavProfil() {
  const [activeTab, setActiveTab] = useState("Semua"); // Tab aktif awal adalah 'Semua'

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="gap-12 items-center flex overflow-auto w-auto md:px-10 2xl:px-14 px-6 flex-row">
        <div
          className={`cursor-pointer rounded-3xl text-primary ${
            activeTab === "Semua"
              ? "bg-secondary text-white px-4 py-2"
              : "text-opacity-80 mx-4"
          }`}
          onClick={() => handleTabClick("Semua")}
        >
          Semua
        </div>
        <div
          className={`cursor-pointer rounded-3xl text-primary ${
            activeTab === "Badan Pengurus Harian"
              ? "bg-secondary text-white px-4 py-2"
              : "text-opacity-80 mx-4"
          }`}
          onClick={() => handleTabClick("Badan Pengurus Harian")}
        >
          Badan Pengurus Harian
        </div>
        <div
          className={`cursor-pointer rounded-3xl text-primary ${
            activeTab === "Pengkaderan Organisasi"
              ? "bg-secondary text-white px-4 py-2"
              : "text-opacity-80 mx-4"
          }`}
          onClick={() => handleTabClick("Pengkaderan Organisasi")}
        >
          Pengkaderan Organisasi
        </div>
        <div
          className={`cursor-pointer rounded-3xl text-primary ${
            activeTab === "Pengembangan Akademik"
              ? "bg-secondary text-white px-4 py-2"
              : "text-opacity-80 mx-4"
          }`}
          onClick={() => handleTabClick("Pengembangan Akademik")}
        >
          Pengembangan Akademik
        </div>
        <div
          className={`cursor-pointer rounded-3xl text-primary ${
            activeTab === "Huminkom"
              ? "bg-secondary text-white px-3 py-2"
              : "text-opacity-80 mx-4"
          }`}
          onClick={() => handleTabClick("Huminkom")}
        >
          Huminkom
        </div>
      </div>
    </>
  );
}
