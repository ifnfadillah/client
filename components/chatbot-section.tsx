'use client'

import { BotMessageSquare, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function ChatbotSection() {
  const benefits = [
    "Kaboo Asisstant siap menjawab pertanyaanmu 24 Jam",
    "Siap menjawab seputar Sejarah, Fasilitas dan Benefit dari Kampung Lingkar Kampus",
    "Kaboo membantumu dalam mencari event Kampung Lingkar Kampus terdekat",
    "Kenali dan Pelajari seputar informasi Kampung Lingkar Kampus",
  ];

  return (
    <section className="relative container">
      <div className="bg-black md:rounded-2xl lg:mx-10 py-12 shadow-xl">
        <motion.div
          className="max-w-7xl space-y-6 mx-auto px-4 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center">
            <div className="origin-bottom -rotate-1">
              <div className="flex text-2xl lg:text-4xl w-fit font-bold text-white bg-amber-500 text-center px-3 py-1 rounded-lg shadow-xl me-2">
                <BotMessageSquare className="mt-1 md:mt-2 me-2 w-7 h-7"></BotMessageSquare>
                Kaboo
              </div>
            </div>
            <span className="text-2xl lg:text-4xl w-fit font-semibold text-white">
              Chatbot Asisstant
            </span>
          </div>
          <p className="text-sm md:text-lg font-medium text-white">
            Kaboo Merupakan Kampung Lingkar Kampus Chatbot Assistant
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-5 items-center px-4 md:px-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mx-24 md:mx-30 relative aspect-[1/1] md:mt-0 md:mb-0 mt-10 mb-10 rounded-lg overflow-hidden"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/Kaboo.gif"
              alt="Kaboo Image"
              fill
              className="object-cover w-10 h-10"
            />
          </motion.div>
          <motion.div
            className="space-y-6 md:space-y-8 px-4 md:px-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-white text-md ">{benefit}</p>
              </motion.div>
            ))}

            <Link href="/chatbot">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm mt-10 md:px-6 py-6 w-full md:w-auto rounded-md md:rounded-lg
                  transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg
                  transform active:scale-95 flex items-center justify-center"
                >
                  <BotMessageSquare className="w-8 h-8 mr-1"></BotMessageSquare>
                  Mulai Percakapan Dengan Kaboo
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
