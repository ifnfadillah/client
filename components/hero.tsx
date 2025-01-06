"use client";

import Link from "next/link";
import { BotMessageSquare } from "lucide-react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Button } from "./ui/button";
import Navbar from "./navbar";

export function Hero() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-hidden lg:mx-8 bg-gradient-to-br bg-white">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container relative mx-auto px-4 py-20 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6 mt-10">
              <h1 className="text-2xl md:text-4xl font-semibold text-black mb-4">
                <Typewriter
                  options={{
                    strings: ["Selamat Datang di", "Yuk Lebih Kenali"],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                    deleteSpeed: 100,
                    pauseFor: 1500,
                  }}
                />
              </h1>
              <h2 className="flex text-3xl mx-auto md:mx-0 lg:text-4xl w-fit font-bold text-white bg-amber-500 text-center px-3 py-1 rounded-lg shadow-xl">
                Kampung Lingkar Kampus
              </h2>
              <div className="flex mx-auto justify-center lg:justify-start">
                <p className="text-sm text-gray-800 py-3">
                  In Association with{" "}
                </p>
                <Image
                  src="/vokasi2.png"
                  width={175}
                  height={120}
                  alt="Showcase"
                  className="ms-2 md:ms-4"
                />
              </div>
              <p className="text-sm text-gray-600 lg:w-5/6">
                Kampung Lingkar Kampus merupakan program Fakultas Vokasi
                Universitas Brawijaya Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nihil, tempore dolorum. Ratione quo aliquid
                distinctio doloremque impedit harum, doloribus sapiente fuga.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-400  text-white px-12 py-6 text-lg rounded-md"
                >
                  Explore KLK
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-6 text-lg rounded-md"
                >
                  <BotMessageSquare className="w-8 h-8 mr-1"></BotMessageSquare>
                  Tanya Kaboo!
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hero.png"
                  width={800}
                  height={800}
                  alt="Showcase"
                  className="mx-auto"
                />
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#E0F7FA] to-[#E8F5E9] rounded-full blur-2xl opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
