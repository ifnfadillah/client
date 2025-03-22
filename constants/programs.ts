import { Hospital, House, LucideIcon, PartyPopper, Speech, Theater, Utensils } from "lucide-react";

interface Programs {
      title: string;
      description: string;
      icon: LucideIcon;
}

const programs = [
      {
        title: "Event atau Festival",
        description:
          "Informasi seputar event atau festival budaya rutin tahunan yang ada di kampung-kampung",
        icon: PartyPopper,
      },
      {
        title: "4 Kampung Sekitar",
        description:
          "Mengenali kondisi geografis, budaya dan layanan yang ada di kampung-kampung",
        icon: House,
      },
      {
        title: "Kuliner",
        description:
          "Beragam kuliner khas dan informasi seputar kuliner yang ada di kampung-kampung",
        icon: Utensils,
      },
      {
        title: "Cagar Budaya",
        description:
          "Informasi seputar cagar budaya atau situs purbakala yang ada di kampung-kampung",
        icon: Theater,
      },
      {
        title: "Layanan Masyarakat",
        description:
          "Menampilkan informasi seputar layanan masyarakatyang ada di kampung-kampung",
        icon: Speech,
      },
      {
        title: "Layanan Kesehatan",
        description:
          "Menampilkan informasi seputar layanan kesehatan dan untuk berobat di kampung-kampung",
        icon: Hospital,
      },
    ];

    export default programs