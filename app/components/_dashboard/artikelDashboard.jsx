import { useState } from "react";

export default function ArtikelDashboard({ session }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/artikel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          session,
        }),
      });

      console.log(`response of post: `, response);

      if (response.status === 200) {
        alert("Woi Berhasil");
        console.log("Buat Artikel Berhasil");
        const responseJson = await response.json();
        console.log(responseJson);

        setTitle("");
        setContent("");
      } else {
        console.error("Error creating article");
      }
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <>
      <div className="w-full rounded-lg">
        <h1 className="text-xl font-medium mb-4">Buat Artikel</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-600 font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-600 font-medium"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
              rows="6"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
