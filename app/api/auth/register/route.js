import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { name, username, nomorAnggota, email, password } = body.data;
  console.log(body.data);

  if (!name || !username || !nomorAnggota || !email || !password) {
    return new NextResponse("Missing name,username, email, password", {
      status: 400,
    });
  }

  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    return new NextResponse("User already exist", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      username,
      nomorAnggota,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
