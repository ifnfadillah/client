'use client'

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { motion } from "framer-motion"

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("gallery")

  const blogPosts = [
    {
      title: "Karnaval Budaya RW. 03 Sumbersari Kota Malang",
      date: "24 September 2024",
      image: "/bg-hero2.png",
    },
    {
      title: "Kunjungan Menteri PPPA",
      date: "24 September 2024",
      image: "/news-2.png",
    },
    {
      title: "Podcast KLK",
      date: "24 September 2024",
      image: "/bg-hero1.png",
    },
  ]

  const youtubeVideos = [
    "FyG96-oJkW8",
    "2KUjbep0R6s",
    "7WmD2bYDJPU"
  ]

  return (
    <section className="py-20 mx-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center space-x-2 mb-8 space-y-4 lg:space-y-0">
          <h2 className="text-3xl font-bold text-center">Galeri</h2>
          <h2 className="flex text-center text-xl lg:text-3xl w-fit font-bold text-white bg-amber-500 px-3 py-1 rounded-lg shadow-xl">Kampung Lingkar Kampus</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="outline" 
            className={`bg-white dark:bg-black dark:text-white dark:hover:bg-gray-700 dark:outline-2 rounded-2xl hover:bg-blue-200 ${activeTab === "gallery" ? " bg-blue-500 dark:bg-blue-500 dark:text-white shadow-md text-white" : ""}`} 
            onClick={() => setActiveTab("gallery")}
          >
            Galeri Foto
          </Button>
          <Button 
            variant="outline" 
            className={`bg-white dark:bg-black dark:text-white dark:hover:bg-gray-700 dark:outline-2 rounded-2xl hover:bg-blue-200 ${activeTab === "youtube" ? " bg-blue-500 dark:bg-blue-500 dark:text-white shadow-md text-white" : ""}`} 
            onClick={() => setActiveTab("youtube")}
          >
            Liputan Youtube
          </Button>
        </div>
        {activeTab === "gallery" ? (
          <motion.div
            id="foto"
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="aspect-video relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1.5, delay: index * 0.2 }}
              >
                <img
                  src={post.image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 top-32 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <h3 className="font-bold">{post.title}</h3>
                    <p>{post.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            id="youtube"
            className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {youtubeVideos.map((videoId, index) => (
              <motion.div
                key={index}
                className="aspect-video"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`YouTube video player ${index + 1}`} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
