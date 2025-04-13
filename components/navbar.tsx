"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { usePathname } from "next/navigation";
import { Menu, X, BotMessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "home", label: "Beranda" },
    { href: "about", label: "Tentang Kami" },
    { href: "event", label: "Kampung" },
    { href: "galeri", label: "Galeri" },
    { href: "berita", label: "Berita" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        scrolled ? "bg-white dark:bg-black" : "bg-transparent dark:bg-black"
      }`}
    >
      <nav className="relative max-w-[75rem] w-full mx-auto px-4 sm:flex sm:items-center" aria-label="Global">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="sm:hidden w-8"></div>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center mx-auto sm:mx-0 cursor-pointer"
            aria-label="Brand"
          >
            <Image
              src="/logo.png"
              className="h-full w-full mr-3"
              alt="Logo KLK"
              width={100}
              height={50}
            />
          </ScrollLink>
          <div className="sm:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-white dark:bg-black sm:bg-transparent transition-all duration-300 basis-full sm:shadow-none sm:static sm:basis-auto sm:flex sm:flex-1`}
        >
          <div className="flex flex-col gap-y-4 p-4 sm:p-0 sm:flex-row sm:items-center sm:justify-center sm:mt-0 w-full">
            <div className="flex flex-col sm:flex-row gap-y-4 sm:items-center gap-x-12 ms-0 md:ms-16">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.href}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={100} 
                  className="font-medium text-left text-sm sm:text-center sm:my-0 md:my-3.5 rounded-md cursor-pointer text-gray-800 dark:text-white dark:hover:bg-blue-600 hover:text-blue-600 hover:bg-gray-300 py-2 px-3"
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>

            <div className="sm:hidden mt-4">
              <ScrollLink to="chatbot" smooth={true} duration={500} offset={-80}>
                <Button className="w-full bg-amber-500 hover:bg-amber-400 text-white flex items-center justify-center gap-2">
                  Tanya Kaboo
                  <BotMessageSquare />
                </Button>
              </ScrollLink>
            </div>
          </div>
        </div>

        <div className="flex-none hidden sm:block">
          <ScrollLink to="chatbot" smooth={true} duration={500} offset={-80}>
            <Button className="bg-amber-500 hover:bg-amber-400 text-white flex items-center gap-2">
              Tanya Kaboo
              <BotMessageSquare />
            </Button>
          </ScrollLink>
        </div>
      </nav>
    </header>
  );
}
