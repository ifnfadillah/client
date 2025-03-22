"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AssociationSection() {
  const logos = [
    { src: "/UB.png", alt: "UB Logo" },
    { src: "/vokasi.jpg", alt: "Vokasi Logo" },
    { src: "/km.jpg", alt: "Kampus Merdeka" },
  ];
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    setShowCarousel(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-8">
        <div className="items-center mx-auto justify-center text-center mb-12">
        <p className="text-sm md:text-md font-semibold text-gray-700 dark:text-white justify-center mb-4">
            MITRA & LEMBAGA ASOSIASI PENYELENGGARA
          </p>
          <div className="flex mb-4 justify-center">
            <div className="origin-bottom -rotate-1">
              <div className="flex text-2xl lg:text-4xl w-fit font-bold text-white bg-amber-500 text-center px-3 py-1 rounded-lg shadow-xl">
                Kampung Lingkar Kampus
              </div>
            </div>
          </div>
        </div>
        {showCarousel && (
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-8">
                <div className="w-40 h-20 relative mx-auto">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    style={{ objectFit: "contain" }}
                    className="transition-opacity duration-300 hover:opacity-80"
                  />
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}
