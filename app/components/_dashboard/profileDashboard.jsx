"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Profile({ currentImage, onSubmit }) {
  const [newName, setNewName] = useState("");
  const { data: session, status, update } = useSession();
  console.log("useSession Hook session object", session);

  const [newImage, setNewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mengirim file gambar baru ke endpoint Anda untuk diunggah
    const formData = new FormData();
    formData.append("profilePicture", newImage);

    try {
      await onSubmit(formData);
      // Setelah berhasil mengubah foto profil, Anda dapat memperbarui tampilan gambar profil
      // atau mengarahkan pengguna ke halaman profil mereka.
    } catch (error) {
      console.error("Gagal mengubah foto profil:", error);
    }
  };

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

        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-4">
            <img
              src={currentImage || "/default-profile-image.jpg"}
              alt="Profile Image"
              className="w-28 h-28 rounded-full object-cover"
            />
            <div>
              <input
                type="file"
                name="profilePicture"
                id="profilePicture"
                accept="image/*"
                onChange={handleImageChange}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Ubah Foto Profil
              </button>
            </div>
          </div>
        </form>
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
