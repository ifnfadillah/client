import Image from 'next/image'
import { CircleUserRound, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 bg-white border-t-2">
      <div className="max-w-7xl mx-8 space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/"
              alt="KLK Logo"
              width={89}
              height={32}
              className="h-8"
            />
          </div>
          <Image
            src="/vokasi2.png"
            alt="Vokasi & PSIK"
            width={160}
            height={125}
            className=""
          />
        </div>

        <div className="space-y-4 text-gray-500 text-sm">
          <p>
            Kampung Lingkar Kampus ("KLK") Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, nam tenetur vero aliquid nihil accusantium atque corrupti natus, laudantium architecto adipisci sit et ratione unde aperiam laboriosam amet ipsa provident?.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium similique ex cupiditate minus est quasi nisi maiores beatae magnam, possimus sequi odio placeat consequatur rerum, porro doloribus! Id, sint nihil.
          </p>
        </div>

          <div className="flex justify-between border-t-2">
            <div className="text-sm text-gray-600 mt-5">
              KLK Copyright © 2025 . All rights reserved
            </div>
            <div className="flex gap-4 mt-4 md:mt-2.5">
              <Link 
                href="https://facebook.com" 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600" />
              </Link>
              <Link 
                href="https://twitter.com" 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-400" />
              </Link>
              <Link 
                href="https://instagram.com" 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-600" />
              </Link>
              <Link 
                href="https://youtube.com" 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-6 h-6 text-gray-600 hover:text-red-600" />
              </Link>
            </div>
          </div>
      </div>
    </footer>
  )
}

