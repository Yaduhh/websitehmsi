
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

import Head from "next/head";
import Logo from "@/public/assets/images/logohmsi.png";
import Image from "next/image";
import { MdPerson, MdArrowDropDownCircle } from "react-icons/md";
import Main from "../components/_dashboard/main";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // const session = useSession();
  console.log("useSession Hook session object", session);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Dashboard</title>
      </Head>

      <nav className="w-full bg-gray-50 shadow-xl flex py-1 2xl:py-4 md:px-10 2xl:px-14 justify-between items-center">
        <div className="2xl:w-44 w-36">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex gap-3 items-center text-primary">
          <MdPerson size={40} />
          <div className="text-xl">Hi, {session?.user.name}</div>
          <button>
            <MdArrowDropDownCircle size={30} />
          </button>
        </div>
      </nav>

      <div className="w-full h-80 bg-primary absolute top-0 left-0 -z-30"></div>

      <Main />

      {/* <div className="text-4xl">Hi {session?.user.name}</div>
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
