import prisma from "@/app/server/db/prisma";

export default async function PostArtikel(req, res) {
  if (req.method == "POST") {
    const { title, content } = req.body;
    console.log(req.body);

    try {
      await prisma.article.create({
        data: {
          title: title,
          content: content,
        },
      });
      return res.status(200).json({
        data: "Success",
      });
    } catch (err) {
      return res.status(504).json({ error: err.toString() });
    }
  } else {
    return res.status(405).json({ error: "Method not Allowed" });
  }
}
