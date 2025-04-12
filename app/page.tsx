import { Hero } from "@/components/hero"
import Navbar from "@/components/navbar"
import { ChatbotSection } from "@/components/chatbot-section"
import ChatbotButton from "@/components/ui/chatbot-button"
import { ProgramSection } from "@/components/program-section"
import dynamic from 'next/dynamic'
import Footer from "@/components/footer"
import AssociationSection from "@/components/association-section"
import BannerSection from "@/components/banner-section"
import NewsSection from "@/components/news-section"
import { GallerySection } from "@/components/gallery-section"

const KampungSection = dynamic(() => import('@/components/kampung-section').then(mod => mod.KampungSection), {
  ssr: false,
  loading: () => <div className="h-96 w-full flex items-center justify-center">Loading map...</div>
})

export default function Home() {
  return (
    <> 
      <Navbar /> 
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <ProgramSection />
        </section>
        <section id="event">
          <KampungSection />
        </section>
        <section id="galeri">
          <GallerySection />
        </section>
        <section id="chatbot">
          <ChatbotSection />
        </section>
        <section id="berita">
          <NewsSection />
        </section>
        <section id="banner">
          <BannerSection />
        </section>
        <section id="association">
          <AssociationSection />
        </section>
      </main>
      <ChatbotButton />
      <Footer />
    </>
  )
}
