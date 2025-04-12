'use client'
import { MapContainer, TileLayer, Marker, Polygon, useMap } from "react-leaflet"
import L, { divIcon, LatLngTuple } from "leaflet"
import "leaflet/dist/leaflet.css"

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

const createLucideIcon = (text: string) => {
  return divIcon({
    className: "text-marker",
    html: `
      <div style="display: flex; align-items: center; background: white; padding: 6px 10px; border-radius: 6px; font-weight: bold; box-shadow: 2px 2px 10px rgba(0,0,0,0.2);">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin" style="margin-right: 6px;">
          <path d="M12 21s-6-5.14-6-10a6 6 0 1 1 12 0c0 4.86-6 10-6 10z"/><circle cx="12" cy="11" r="2"/>
        </svg>
        ${text}
      </div>`,
    iconSize: [120, 30],
    iconAnchor: [60, 15]
  })
}

interface ChangeViewProps {
  center: [number, number];
}

const ChangeView = ({ center }: ChangeViewProps) => {
  const map = useMap()
  map.setView(center, 16)
  return null
}

interface KampungMapProps {
  kampungLocations: KampungLocations;
  activeTab: string | null;
  showAll: boolean;
}

export function KampungMap({ kampungLocations, activeTab, showAll }: KampungMapProps) {
  // Tentukan center berdasarkan activeTab
  const center: [number, number] = showAll 
    ? [-7.9450, 112.6125] 
    : activeTab 
      ? [kampungLocations[activeTab].lat, kampungLocations[activeTab].lng]
      : [-7.9450, 112.6125]; // Default jika activeTab null

  return (
    <MapContainer 
      center={center}
      zoom={showAll ? 14 : 16} 
      className="h-96 w-full rounded-lg shadow-lg relative z-10"
    >
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
      />

      {!showAll && activeTab && <ChangeView center={[kampungLocations[activeTab].lat, kampungLocations[activeTab].lng]} />}

      {Object.keys(kampungLocations).map((key) => (
        (showAll || key === activeTab) && (
          <div key={key}>
            <Marker 
              position={[kampungLocations[key].lat, kampungLocations[key].lng]}
              icon={createLucideIcon(kampungLocations[key].name)}
            />
            <Polygon 
              positions={kampungLocations[key].geofence}
              pathOptions={{ color: kampungLocations[key].color, weight: 2, opacity: 0.6 }}
            />
          </div>
        )
      ))}
    </MapContainer>
  )
} 