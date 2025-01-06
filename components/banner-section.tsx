"use client"

import { LogIn, Award } from 'lucide-react'
import { Card } from "@/components/ui/card"

export default function BannerSection() {
  return (
    <section className="relative container overflow-hidden my-8">
      <div className="absolute inset-0 lg:mx-8 md:rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400">
        <svg
          className="absolute w-full h-full opacity-10"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${50 + i * 50} Q 400 ${30 + i * 50} 1200 ${50 + i * 50}`}
              fill="none"
              stroke="white"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>

      <div className="relative container px-16 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 text-center mx-auto">
            <div className='-rotate-1 flex justify-center'>
            <span className="flex text-2xl lg:text-4xl w-fit font-bold text-white bg-amber-500 text-center px-3 py-1 rounded-lg shadow-xl md:ms-4 sm:mx-auto">
              Kampung Lingkar Kampus
            </span>
            </div>
            <p className="text-md md:text-md opacity-90 ms-4 md:w-9/12">
              Kirim seluruh dukungan kalian dan berkontribusi dalam kemajuan program Kampung Lingkar Kampus melalui:
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-white/10 backdrop-blur border-none text-white hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <LogIn className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-md md:text-xl font-semibold">Komunitas Kampung Lingkar Kampus</h3>
                  <p className="opacity-90 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ex nulla, doloribus nobis aliquid, 
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur border-none text-white hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <LogIn className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-md md:text-xl font-semibold">Mitra & Sponsor</h3>
                  <p className="opacity-90 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ex nulla, doloribus nobis aliquid,
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

