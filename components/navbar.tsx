"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, SquareArrowUpRight } from "lucide-react";
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
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang Kami" },
    { href: "/event", label: "Event" },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita" },
  ];

  return (
    <header
      className="flex flex-wrap justify-start sm:flex-nowrap z-50 w-full text-sm py-3 sm:py-0 sticky top-0 left-0 transition-colors duration-200 bg-transparent backdrop-blur-md"
    >
      <nav
        className="relative max-w-[75rem] w-full mx-auto px-4 sm:flex sm:items-center"
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="sm:hidden w-8">
          </div>
          <Link href="/" className="flex items-center mx-auto sm:mx-0" aria-label="Brand">
            <Image
              src="/"
              className="h-8 mr-3"
              alt="Logo KLK"
              width={32}
              height={32}
            />
            {/* <span className="self-center text-lg text-blue-900 font-semibold sm:text-xl whitespace-nowrap logo-text">
              Deluxie
            </span> */}
          </Link>
          <div className="sm:hidden">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-white sm:bg-transparent shadow-lg transition-all duration-300 basis-full sm:shadow-none sm:static sm:basis-auto sm:flex sm:flex-1`}
        >
          <div className="flex flex-col gap-y-4 p-4 sm:p-0 sm:flex-row sm:items-center sm:justify-center sm:mt-0 w-full">
            <div className="flex flex-col sm:flex-row gap-y-4 sm:items-center gap-x-12 ms-0 md:ms-16">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium text-left sm:text-center sm:my-0 md:my-3.5 px-2 rounded-md ${
                    pathname === item.href 
                      ? "text-blue-600"
                      : "text-gray-800 hover:text-blue-600 hover:bg-gray-300"
                  } 'text-gray-600 hover:text-black py-2 px-3`} 
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="sm:hidden mt-4">
              <Button className="w-full bg-amber-500  hover:bg-amber-400  text-white">
                Bergabung KLK
                <SquareArrowUpRight></SquareArrowUpRight>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-none hidden sm:block">
          <Button className="bg-amber-500 hover:bg-amber-400  text-white">
            Bergabung KLK
            <SquareArrowUpRight></SquareArrowUpRight>
          </Button>
        </div>
      </nav>
    </header>
  );
}
