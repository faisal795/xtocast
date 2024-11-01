import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import { useState, useEffect } from "react";

const Carousel = () => {
  const carouselSlide = [slide3, slide1, slide2];
  const [CurrentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((CurrentSlide) =>
      CurrentSlide === 0 ? (carouselSlide.length > 0 ? carouselSlide.length - 1 : 0) : CurrentSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((CurrentSlide) =>
      CurrentSlide === carouselSlide.length - 1 ? 0 : CurrentSlide + 1
    );
  };

  // Auto-slide using useEffect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [CurrentSlide]); // Dependency on CurrentSlide to reset timer

  return (
    <div className="w-full text-[14px] font-medium transition-all duration-500 flex items-center justify-center">
      <div className="container flex justify-center overflow-hidden h-[300px] relative mx-2 sm:h-[400px] md:justify-between md:h-[500px] lg:h-[660px]  md:mx-10 ">
        
        {/* Carousel inner wrapper */}
        <div className="absolute w-full h-full flex items-center justify-center relative">
          {carouselSlide.map((slide, i) => (
            <img
              key={`slide-${i}`}
              src={slide}
              alt={`Slide ${i}`}
              className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out absolute ${i === CurrentSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
        
        {/* Carousel navigation buttons */}
        <div className="absolute w-full h-full flex items-center justify-between z-[1] text-white">
          <button
            className="py-6 pl-2 pr-4 bg-[#0202024d] rounded-r-[46px] text-[16px]"
            onClick={prevSlide}
          >
            <BsArrowLeft />
          </button>
          <button
            className="py-6 pl-4 pr-2 bg-[#0202024d] rounded-l-[46px] text-[16px]"
            onClick={nextSlide}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;