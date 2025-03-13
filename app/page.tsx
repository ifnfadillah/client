import { Hero } from "@/components/hero"
import Navbar from "@/components/navbar"
import { ChatbotSection } from "@/components/chatbot-section"
import ChatbotButton from "@/components/ui/chatbot-button"
import { ProgramSection } from "@/components/program-section"
import CTABanner from "@/components/banner-section"
import Footer from "@/components/footer"
import AssociationSection from "@/components/association-section"
import BannerSection from "@/components/banner-section"
import NewsSection from "@/components/news-section"
import { GallerySection } from "@/components/gallery-section"

export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <ProgramSection/>
        <GallerySection />
        <ChatbotSection/>
        <NewsSection />
        <BannerSection />
        <AssociationSection />
      </main>
      <ChatbotButton />
      <Footer />
    </>
  )
}

