"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
  { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch' },
  { imgUrl: '/assets/images/hero-2.svg', alt: 'bag' },
  { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp' },
  { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer' },
  { imgUrl: '/assets/images/hero-5.svg', alt: 'chair' },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel-container relative">
      <div className="hero-carousel border border-gray-300 rounded-lg shadow-lg overflow-hidden">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showStatus={false}
        >
          {heroImages.map((image) => (
            <div key={image.alt} className="relative w-full h-full">
              <Image 
                src={image.imgUrl}
                alt={image.alt}
                layout="responsive"
                width={700}
                height={500}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute -left-[15%] bottom-0 z-0 max-xl:block animated-arrow">
        <Image 
          src="/assets/icons/hand-drawn-arrow.svg"
          alt="arrow"
          width={175}
          height={175}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
