"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Profile() {
  const [newName, setNewName] = useState("");
  const { data: session, status, update } = useSession();
  console.log("useSession Hook session object", session);

  return (
    <>
      <div className="flex items-center space-x-4">
        <img
          src="/path-to-your-profile-image.jpg"
          alt="Profile Image"
          className="w-28 h-28 rounded-full object-cover"
        />
        <div>
          <h3 className="text-xl font-semibold">{session?.user.name}</h3>
          <p className="text-gray-500">Bidang PAO</p>
          <p className="text-gray-500">
            Nomor Anggota : {session?.user.nomorAnggota}
          </p>
        </div>
      </div>

      {/* Ubah Nama Profil */}
      {/* <label>Ubah Nama Profil</label>
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
