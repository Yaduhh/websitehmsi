// import prisma from "@/app/server/db/prisma";
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
  if (req.method == "POST") {
    const data = await req.json();
    const { title, content, session } = data;

    console.log(`session`, session);

    const userId = session.user.id;

    try {
      const response = await prisma.article.create({
        data: {
          title: title,
          content: content,
          authorId: userId,
        },
      });
      return NextResponse.json({ data: response })
    } catch (err) {
      return NextResponse.json({ error: err.toString() });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" })
  }
}
