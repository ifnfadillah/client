'use client'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import dynamic from 'next/dynamic'
import { LatLngTuple } from "leaflet"

// Tambahkan interface untuk data kampung
interface KampungData {
  name: string;
  lat: number;
  lng: number;
  geofence: LatLngTuple[];
  color: string;
}

interface KampungLocations {
  [key: string]: KampungData;
}

// Data Kampung (Lat, Lng, dan Geofence)
const kampungLocations: KampungLocations = {
  ketawanggede: { 
    name: "Kampung Ketawanggede", 
    lat: -7.9495, 
    lng: 112.6135,
    geofence: [
      [-7.9488, 112.6115], [-7.9492, 112.6140], 
      [-7.9505, 112.6150], [-7.9512, 112.6130], 
      [-7.9500, 112.6110]
    ],
    color: "red"
  },
  sumbersari: { 
    name: "Kampung Sumbersari", 
    lat: -7.9568, 
    lng: 112.6175,
    geofence: [
      [-7.9555, 112.6155], [-7.9570, 112.6170], 
      [-7.9590, 112.6185], [-7.9595, 112.6160], 
      [-7.9575, 112.6145]
    ],
    color: "green"
  },
  keramikdinoyo: { 
    name: "Kampung Keramik Dinoyo", 
    lat: -7.9398, 
    lng: 112.5991,
    geofence: [
      [-7.9385, 112.5975], [-7.9405, 112.6005], 
      [-7.9420, 112.5990], [-7.9410, 112.5970], 
      [-7.9395, 112.5960]
    ],
    color: "blue"
  },
  cempluk: { 
    name: "Kampung Cempluk", 
    lat: -7.9281, 
    lng: 112.6093,
    geofence: [
      [-7.9275, 112.6075], [-7.9290, 112.6095], 
      [-7.9305, 112.6105], [-7.9315, 112.6085], 
      [-7.9300, 112.6065]
    ],
    color: "purple"
  },
}

// Dynamic import untuk KampungMap
const KampungMap = dynamic(() => import('./kampung-map').then(mod => mod.KampungMap), {
  ssr: false,
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading map...</div>
})

export function KampungSection() {
  const [activeTab, setActiveTab] = useState<string | null>(null) 
  const showAll = activeTab === null 
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="mt-10 mx-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-center space-x-2 mb-4 space-y-4 lg:space-y-0">
          <h2 className="flex text-center text-xl lg:text-3xl w-fit font-bold text-white bg-amber-500 px-3 py-1 rounded-lg shadow-xl">
            Kampung-Kampung Lingkar Kampus
          </h2>
        </div>
        <p className="text-xs md:text-sm text-center text-gray-600 dark:text-white mb-4">
          Berikut 4 Kampung yang ada di sekitar Kampus Universitas Brawijaya
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="outline" 
            className={`bg-white rounded-2xl dark:bg-black dark:text-white dark:hover:bg-gray-700 hover:bg-blue-200  ${showAll ? " bg-blue-500 dark:bg-blue-500 dark:text-whiteshadow-md text-white" : ""}`} 
            onClick={() => setActiveTab(null)}
          >
            Semua Kampung
          </Button>
          {Object.keys(kampungLocations).map((key) => (
            <Button 
              key={key}
              variant="outline" 
              className={`bg-white dark:bg-black dark:text-white dark:hover:bg-gray-700 dark:outline-2 rounded-2xl hover:bg-blue-200 ${activeTab === key ? " bg-blue-500 dark:bg-blue-500 dark:text-white shadow-md text-white" : ""}`} 
              onClick={() => setActiveTab(key)}
            >
              {kampungLocations[key].name}
            </Button>
          ))}
        </div>
        <div className="mt-8">
          {isMounted && (
            <KampungMap 
              kampungLocations={kampungLocations}
              activeTab={activeTab}
              showAll={showAll}
            />
          )}
        </div>
      </div>
    </section>
  )
}
