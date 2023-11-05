// Carousel.js
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-[82rem] mx-auto h-[15rem]">
      <div className="carousel-container relative overflow-hidden w-full ">
        <div
          className="carousel-wrapper flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide flex-shrink-0 w-full">
              <img
                src={image}
                alt={index}
                className="w-[82rem] h-[15rem] object-cover object-top rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-4 text-5xl text-transparent  hover:text-black"
        onClick={prevSlide}
      >
        <h1>❮</h1>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-4 text-5xl text-transparent hover:text-black"
        onClick={nextSlide}
      >
        <h1>❯</h1>
      </button>
    </div>
  );
};

export default Carousel;
