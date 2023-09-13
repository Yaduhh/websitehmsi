"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const { data: session } = useSession(); // Use the useSession hook to get session data
  useEffect(() => {
    // Check if user is logged in and redirect to the dashboard page
    if (session) {
      router.replace("/dashboard");
    }
  }, [session, router]);

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      console.log(`checking login creds`);
      setLoading(true);
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (res?.error) {
        setError("Email atau kata sandi salah. Silakan coba lagi.");
        setLoading(false);
      } else {
        setError(null);
        setLoading(false);
        console.log('login berhasil!');
        router.push("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      setError("Terjadi kesalahan saat login. Silakan coba lagi.");
      console.log(res);
    }
  };

  return (
    <>
      <Head>
        <title>Masuk Akun HMSI</title>
      </Head>
      <div className="w-full h-screen flex max-sm:flex-col-reverse justify-between md:justify-center items-center overflow-hidden">
        {/* Kolom 1 */}
        <div className="w-[40%] max-sm:w-full">
          <div className="bg-primary w-full rounded-tr-[70px] h-96 md:h-screen relative -z-0 ">
            <div className="w-56 px-8 py-5 max-sm:hidden">
              <Link href="/">
                <Image
                  src={`/assets/images/logo footer.png`}
                  alt="herologin"
                  width={900}
                  height={900}
                  className="images"
                />
              </Link>
            </div>
            <div className="absolute -bottom-10 -right-36 -left-20 -z-10 ">
              <Image
                src={`/assets/images/bglogin.png`}
                alt="herologin"
                width={900}
                height={900}
                className="images"
              />
            </div>
            <div className="absolute bottom-5 md:bottom-0 2xl:bottom-10 right-0 md:-right-32 2xl:-right-44 -z-10">
              {/* mobile only */}
              <Image
                src={`/assets/images/herologin.png`}
                alt="herologin"
                width={450}
                height={500}
                quality={100}
                media="(min-width: 640px)"
                className="hidden max-sm:flex p-5"
              />
              {/* md xl */}
              <Image
                src={`/assets/images/herologin.png`}
                alt="herologin"
                width={500}
                height={500}
                className="2xl:hidden block images scale-[85%] max-sm:hidden"
              />
              {/* 2xl */}
              <Image
                src={`/assets/images/herologin.png`}
                alt="herologin"
                width={800}
                height={700}
                quality={100}
                media="(min-width: 1536px)"
                className="max-2xl:hidden images"
              />
            </div>
          </div>
        </div>

        {/* Kolom 2 */}
        <div className="w-[60%] max-sm:w-full">
          <div className="w-full flex flex-col justify-center items-center">
            {/* mobile Only */}
            <div className="w-full px-32 py-5 bg-primary hidden max-sm:flex shadow-md">
              <Image
                src={`/assets/images/logo footer.png`}
                alt="herologin"
                width={900}
                height={900}
                className="images -ml-2"
              />
            </div>
            <p className="text-4xl mb-10 font-medium mt-10 md:-mt-20 2xl:text-5xl text-primary tracking-wide">
              Masuk Akun
            </p>
            <div className="w-full px-6 md:px-36 2xl:px-44">
              {
                !loading
                ?
                <form onSubmit={loginUser}>
                  <p>{error}</p>
                  <div className="mb-4 2xl:mb-8">
                    <label
                      className="block text-primary text-sm font-semibold mb-2 2xl:text-xl"
                      htmlFor="email"
                    >
                      Email Pengurus
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="shadow rounded-2xl appearance-none w-full py-2 px-3 2xl:px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Your Name"
                      required
                      value={data.email}
                      onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                      }}
                    />
                  </div>
                  <div className="mb-4 2xl:mb-8">
                    <label
                      className="block text-primary text-sm font-semibold mb-2 2xl:text-xl"
                      htmlFor="password"
                    >
                      Password atau kata sandi
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="shadow appearance-none rounded-2xl w-full py-2 px-3 2xl:px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Password"
                      required
                      value={data.password}
                      onChange={(e) => {
                        setData({ ...data, password: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex items-center justify-between flex-row-reverse">
                    <button
                      className="bg-third duration-300 2xl:px-10 2xl:py-2 hover:bg-secondary text-white font-medium py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Masuk
                    </button>
                    <Link
                      className="inline-block align-baseline font-bold text-sm text-accent hover:text-primary duration-200"
                      href="#"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </form>
                :
                <p className="flex w-full h-screen items-center justify-center">
                  Loading...
                </p>
              }
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
