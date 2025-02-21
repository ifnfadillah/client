import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface NewsSection {
  author: string
  title: string
  description: string
  image: string
  slug: string
}

const blogPosts: NewsSection[] = [
  {
    author: "Vokasi UB",
    title: "Kampung Lingkar Kampus “Karnaval Budaya RW. 03 Sumbersari Kota Malang”",
    description: "Fakultas Vokasi Universitas Brawijaya (UB) kembali menunjukkan komitmennya dalam mendukung pelestarian budaya dan pengembangan komunitas lokal dengan meliput event Karnaval Budaya RW 03 Sumbersari, Kota Malang. Liputan ini dilakukan dalam rangkaian program “Podcast On The Street: Kampung Lingkar Kampus”, yang mengusung konsep peliputan langsung dari tengah-tengah masyarakat.",
    image: "/bg-hero2.png",
    slug: "https://vokasi.ub.ac.id/podcast-on-the-street-kampung-lingkar-kampus-karnaval-budaya-rw-03-sumbersari-kota-malang/",
  },
  {
    author: "Vokasi UB",
    title: "Menteri PPPA Lakukan Kunjungan Kerja di Kampung Cempluk kawasan (KLK) Kampung Lingkar Kampus , Malang, sekaligus Mengajak Mahasiswa Akhir Magang di Ruang Bersama Merah Putih (RBMP)",
    description: "Kementerian Pemberdayaan Perempuan dan Perlindungan Anak (KemenPPPA) menggelar kunjungan kerja yang sangat dinantikan di Kampung Cempluk, Desa Kalisongo, Kecamatan Dau, Kabupaten Malang, pada Jumat, 06 Desember 2024. Kunjungan ini bertujuan untuk memperkenalkan dan mengembangkan Ruang Bersama Merah Putih (RBMP).",
    image: "/news-2.png",
    slug: "https://vokasi.ub.ac.id/menteri-pppa-lakukan-kunjungan-kerja-di-kampung-cempluk-kawasan-klk-kampung-lingkar-kampus-malang-sekaligus-mengajak-mahasiswa-akhir-magang-di-ruang-bersama-merah-putih-rbmp-2/",
  },
  {
    author: "Jatim Times",
    title: "Kaya Perguruan Tinggi, Malang Potensial Kembangkan Kampung Lingkar Kampus",
    description: "Memiliki predikat sebagai kota pendidikan, Kota Malang memiliki potensi mengembangkan kawasan sinergis berbasis perguruan tinggi. Pasalnya, saat ini terdapat sekitar 60 perguruan tinggi baik negeri maupun swasta yang aktif dengan sumbangan mahasiswa pendatang sekitar 300 ribu jiwa. ",
    image: "/bg-hero1.png",
    slug: "https://jatimtimes.com/baca/195402/20190617/062600/kaya-perguruan-tinggi-malang-potensial-kembangkan-kampung-lingkar-kampus",
  },
]

export default function NewsSection() {
  return (
    <section className="py-32 px-4 md:px-6 mx-2 lg:mx-8">
      <div className="max-w-7xl mx-auto">
      <div className="items-center mx-auto justify-center text-center mb-12">
        <p className="text-sm md:text-md font-semibold text-gray-700 justify-center mb-4">
            BERITA & ARTIKEL
          </p>
          <div className="flex mb-4 justify-center">
              <div className="flex text-2xl lg:text-4xl w-fit font-bold text-white bg-amber-500 text-center px-3 py-1 rounded-lg shadow-xl">
                Beragam Liputan Seputar Jaringan Kampung
              </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`${post.slug}`} className="blank">
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <span className="text-sm font-medium text-blue-500">
                    {post.author}
                  </span>
                  <h3 className="text-md font-semibold text-gray-900 mt-2 line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-xs line-clamp-3">
                    {post.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-xs mx-auto w-full justify-center py-3 text-center rounded-sm bg-amber-500 hover:bg-amber-400 font-semibold text-white">
                    BACA SELENGKAPNYA
                  </span>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

