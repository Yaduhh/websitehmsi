import React from "react";

const Kontak = () => {
  return (
    <div className="flex justify-end">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 font-light border text-sm rounded-xl w-full focus:outline-none focus:ring focus:border-secondary"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 font-light border text-sm rounded-xl w-full focus:outline-none focus:ring focus:border-secondary"
              placeholder="Masukkan alamat email Anda"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 font-light text-sm border rounded-xl w-full focus:outline-none focus:ring focus:border-secondary"
              placeholder="Ada unek-unek apa broo, ketik disini aje"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-third text-white px-4 py-2 rounded-md hover:bg-secondary transition-all duration-200"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Kontak;
