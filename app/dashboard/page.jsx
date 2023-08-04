"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [newName, setNewName] = useState("");
  const { data: session, status, update } = useSession();
  console.log("useSession Hook session object", session);

  async function handleSignOut() {
    try {
      await signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.error("Error signing out:", error);
      res.status(500).end();
    }
  }

  useEffect(() => {
    // Check if user is not logged in and redirect to the login page
    if (!session) {
      router.replace("/login");
    }
  }, [session, router]);

  // Render loading state or null if session is not yet loaded
  if (status === "loadingg") {
    return <p>Loading...</p>;
  }

  // Render null if session is not available (user not logged in)
  if (!session) {
    return null;
  }
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <div className="text-4xl">Hi {session?.user.name}</div>
      </div>
      <label>Update nama</label>
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
      </button>
      <button
        className="px-4 py-3 rounded-xl bg-primary text-white"
        onClick={() => handleSignOut()}
      >
        Keluar loh
      </button>
      <Link href="/login">
        <button className="px-4 py-3 rounded-xl bg-primary text-white">
          Login lagi
        </button>
      </Link>
    </>
  );
}
