import React, { useState, useEffect } from "react";
import classNames from "classnames";

interface CarouselProps {
  images: string[];
  interval?: number; // Tempo de intervalo entre os slides em milissegundos
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    // Avança para o próximo slide a cada intervalo definido
    const timer = setInterval(() => {
      if (isPlaying) {
        nextSlide();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, interval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="relative w-full h-[84vh] overflow-hidden rounded-lg">
      <div
        className="w-full flex"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
          height: "100%",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-none"
            style={{ overflow: "hidden", height: "100%" }}
          >
            <img
              loading="lazy"
              src={image}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-lg"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={classNames("w-3 h-3 rounded-full", {
              "bg-gray-800": index === currentIndex,
              "bg-gray-300": index !== currentIndex,
            })}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
