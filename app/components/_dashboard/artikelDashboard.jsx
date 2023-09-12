import { useState } from "react";

export default function ArtikelDashboard({session}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/artikel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, session }),
      });

      console.log(`response of post: `, response);

      if (response.status === 200) {
        console.log("berhasil sih harusnya");
        const responseJson = await response.json();
        console.log(responseJson);
      } else {
        console.error("Error creating article");
      }
    } catch (error) {
      console.error("Error creating article:", error);
    }
  };

  return (
    <div>
      <h1>Create New Article</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
