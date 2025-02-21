import {
  PieChart,
  Settings,
  Users,
  Tag,
  Play,
  PartyPopper,
  Drum,
  BookOpen,
  Store,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ProgramSection() {
  const programs = [
    {
      title: "Karnaval Daerah",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempore dolorum. Ratione quo aliquid distinctio doloremque impedit harum, doloribus sapiente fuga",
      icon: PartyPopper,
    },
    {
      title: "Kesenian & Kebudayaan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempore dolorum. Ratione quo aliquid distinctio doloremque impedit harum, doloribus sapiente fuga...",
      icon: Drum,
    },
    {
      title: "Taman Literasi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempore dolorum. Ratione quo aliquid distinctio doloremque impedit harum, doloribus sapiente fuga",
      icon: BookOpen,
    },
    {
      title: "Gerai UMKM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, tempore dolorum. Ratione quo aliquid distinctio doloremque impedit harum, doloribus sapiente fuga",
      icon: Store,
    },
  ];

  return (
    <section className="bg-white py-12 lg:mx-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-[0.03]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          {[...Array(4)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${60 + i * 60} Q 400 ${30 + i * 60} 800 ${60 + i * 60} T 1200 ${60 + i * 60}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row space-x-3 justify-center md:justify-start">
              <h2 className="text-2xl md:text-3xl text-center font-bold text-black">
                Tentang
              </h2>
              <div>
              <h2 className="flex text-2xl mx-auto md:mx-0 lg:text-3xl w-fit font-bold text-white bg-amber-500 text-center px-3 py-1 rounded-lg shadow-xl">
                Kampung Lingkar Kampus
              </h2>
              </div>
            </div>
            <p className="text-gray-600 text-sm text-center md:text-start md:w-5/6">
              Kampung Lingkar Kampung Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Modi dolore inventore corrupti omnis, itaque
              pariatur cum quas voluptatibus quaerat nulla! Quas cupiditate
              quibusdam quam assumenda nam aliquid voluptatum. Facilis,
              provident.
            </p>
          </div>
          <div className="relative">
            {/* <div className="relative w-full aspect-video bg-[#6B35E8]/10 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#6B35E8] rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-50" />
              </div> */}
          </div>
        </div>
      </div>

      {/* <svg
          className="absolute w-full mt-8 h-full opacity-10"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${50 + i * 50} Q 400 ${30 + i * 50} 1200 ${50 + i * 50}`}
              fill="none"
              stroke="black"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg> */}

      <div className="container mx-auto mt-24 px-4">
      <div className="flex flex-col md:flex-row space-x-3 space-y-2 justify-center mb-4">
              <h2 className="text-2xl text-center md:text-3xl mt-2 font-bold text-black">
                Seputar Program 
              </h2>
              <div className="">
              <h2 className="flex text-2xl mx-auto lg:text-3xl w-fit font-bold text-white bg-amber-500 px-3 py-1 rounded-lg shadow-xl">
                Kampung Lingkar Kampus
              </h2></div>
            </div>
        <p className="text-center text-gray-600 mb-12">
          Kampung Lingkar Kampus memiliki beragam program berikut{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 justify-center">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="text-center hover:shadow-lg transition-shadow bg-white/25 bg-opacity-30 backdrop-blur-md border border-white/30"
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-blue-500 rounded-lg p-3 mb-4">
                  <program.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-lg">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
