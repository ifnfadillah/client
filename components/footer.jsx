'use client'

import Image from 'next/image'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      className="w-full px-4 py-6 bg-white dark:bg-black border-t-2"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-8 space-y-8">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="KLK Logo"
              width={160}
              height={125}
              className=""
            />
          </div>
          <Image
            src="/vokasi2.png"
            alt="Vokasi & PSIK"
            width={160}
            height={125}
            className=""
          />
        </motion.div>

        <motion.div 
          className="space-y-4 text-gray-500 dark:text-white text-xs md:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            Kampung Lingkar Kampus merupakan program yang membantu mahasiswa dalam mengenal dinamika sosial-ekonomi melalui sejarah, kesenian budaya, pelayanan informasi kampung, layanan kesehatan dan kuliner yang ada di kampung-kampung sekitar kampus Universitas Brawijaya.
          </p>
          <p>
            Semua informasi yang disajikan telah melalui validasi dan semoga dapat membantu mahasiswa ataupun masyarakat sekitar dalam mengenal dinamika sosial-ekonomi melalui sejarah, kesenian budaya, pelayanan informasi kampung, layanan kesehatan dan kuliner yang ada di kampung-kampung sekitar kampus Universitas Brawijaya.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-between border-t-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="text-xs md:text-sm text-gray-600 dark:text-white mt-5">
            KLK Copyright © 2025 . All rights reserved
          </div>
          <motion.div
            className="flex gap-4 mt-4 md:mt-2.5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="https://facebook.com" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-gray-600 dark:text-white hover:text-blue-600" />
            </Link>
            <Link 
              href="https://twitter.com" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 text-gray-600 dark:text-white hover:text-blue-400" />
            </Link>
            <Link 
              href="https://instagram.com" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-gray-600 dark:text-white hover:text-pink-600" />
            </Link>
            <Link 
              href="https://youtube.com" 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6 text-gray-600 dark:text-white hover:text-red-600" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
