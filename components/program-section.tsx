"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import programs from "@/constants/programs";

import { motion } from "framer-motion";

export function ProgramSection() {
  return (
    <motion.section
      className="bg-white dark:bg-black py-12 lg:mx-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }} 
    >
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-[0.03]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          {[...Array(4)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${60 + i * 60} Q 400 ${30 + i * 60} 800 ${
                60 + i * 60
              } T 1200 ${60 + i * 60}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3. Berikan animasi terpisah pada elemen teks */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row space-x-3 justify-center md:justify-start">
              <h2 className="text-2xl md:text-3xl text-center font-bold text-black dark:text-white">
                Tentang
              </h2>
              <div>
                <h2 className="flex text-xl mx-auto md:mx-0 lg:text-2xl w-fit font-bold text-white bg-amber-500 text-center px-3 py-1 rounded-lg shadow-xl">
                  Kampung Lingkar Kampus
                </h2>
              </div>
            </div>
            <p className="text-gray-600 dark:text-white text-xs md:text-sm text-center md:text-start md:w-5/6">
              Kampung Lingkar Kampus merupakan program yang membantu mahasiswa
              dalam mengenal dinamika sosial-ekonomi melalui sejarah, kesenian
              budaya, pelayanan informasi kampung, layanan kesehatan dan kuliner
              yang ada di kampung-kampung sekitar kampus Universitas Brawijaya.
            </p>
          </motion.div>

          <div className="relative"></div>
        </div>
      </div>

      <div className="container mx-auto mt-24 px-4">
        <div className="flex flex-col md:flex-row space-x-3 space-y-2 justify-center mb-4">
          <h2 className="text-2xl text-center md:text-3xl mt-2 font-bold text-black dark:text-white">
            Seputar
          </h2>
          <div>
            <h2 className="flex text-2xl mx-auto lg:text-3xl w-fit font-bold text-white bg-amber-500 px-3 py-1 rounded-lg shadow-xl">
              Kampung Lingkar Kampus
            </h2>
          </div>
        </div>
        <p className="text-xs md:text-sm text-center text-gray-600 mb-12 dark:text-white">
          Kampung Lingkar Kampus menyediakan informasi tentang kampung-kampung
          sekitar kampus Universitas Brawijaya sebagai berikut{" "}
        </p>
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {programs.map((program) => (
                <CarouselItem
                  key={program.title}
                  className="md:basis-1/2 lg:basis-1/4"
                >
                  <Card className="text-center hover:shadow-lg transition-shadow bg-white/25 bg-opacity-30 backdrop-blur-md border border-white/30">
                    <CardHeader  className="flex aspect-square items-center justify-center">
                      <div className="w-16 h-16 mx-auto bg-blue-500 rounded-lg p-3 mb-4">
                        <program.icon className="w-full h-full text-white" />
                      </div>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
             
                    <CardContent>
                      <p className="text-gray-600 dark:text-white text-sm">{program.description}</p>
                    </CardContent>
                           </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-between mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
}
