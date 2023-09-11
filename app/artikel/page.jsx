// pages/artikel.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const artikel = await prisma.artikel.findMany();

  return {
    props: {
      artikel,
    },
  };
}

export default function Artikel({ artikel }) {
  return (
    <div>
      <h1>Artikel</h1>
      <ul>
        {artikel.map((a) => (
          <li key={a.id}>
            <h2>{a.judul}</h2>
            <p>{a.konten}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
