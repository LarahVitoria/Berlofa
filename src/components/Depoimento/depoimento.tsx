import React, { useState, useEffect } from "react";
import bgDepoimento from "../../assets/bgDepoimento.jpg";

interface Testimonial {
  id: number;
  name: string;
  avatarSrc: string;
  testimonial: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  intervalTime: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  intervalTime,
}) => {
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [shouldRestartCarousel, setShouldRestartCarousel] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const startCarousel = () => {
    stopCarousel();
    const interval = window.setInterval(nextTestimonial, intervalTime);
    setIntervalId(interval);
  };

  const stopCarousel = () => {
    if (intervalId !== null) {
      window.clearInterval(intervalId);
    }
  };

  useEffect(() => {
    if (shouldRestartCarousel) {
      startCarousel();
      setShouldRestartCarousel(false);
    }
  }, [shouldRestartCarousel]);

  useEffect(() => {
    startCarousel();
    return stopCarousel;
  }, []);

  const handleMouseEnter = () => {
    stopCarousel();
  };

  const handleMouseLeave = () => {
    setShouldRestartCarousel(true);
  };

  return (
    <section
      className="p-6 flex items-center flex-col max-w-6xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-8 bg-[#F5B502] border-0" />
        <span className="absolute px-3 text-[#F5B502] text-xl md:text-3xl text-center font-semibold -translate-x-1/2 bg-white left-1/2 ">
          Depoimentos
        </span>
      </div>
      <p className="text-gray-600 mb-8 text-center">
        Confira o que nossos clientes têm a dizer sobre nossa empresa e
        serviços. Satisfação garantida em cada projeto!
      </p>
      <div className="md:w-9/12 w-full">
        <div
          className="relative"
          data-te-carousel-init
          data-te-carousel-slide
          id="carouselExampleSlidesOnly"
        >
          <div
            style={{
              borderRadius: "8px",
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.62) 100%), url(${bgDepoimento}), lightgray 50% / cover no-repeat`,
            }}
            className="flex flex-col md:flex-row md:items-center justify-center w-full p-6 lg:h-full lg:p-8 relative"
          >
            <div className="md:mr-8 flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  loading="lazy"
                  src={testimonials[activeIndex].avatarSrc}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover rounded-full"
                  style={{
                    objectPosition: "center top",
                  }}
                />
              </div>
            </div>
            <div className="flex-grow flex justify-center flex-col">
              <blockquote className="text-center sm:text-left  text-lg italic text-[#F5B502]">
                "{testimonials[activeIndex].testimonial}"
              </blockquote>
              <div className="text-center md:text-left text-[#F5B502]">
                <p className="my-2 font-extrabold">
                  {testimonials[activeIndex].name}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {/* Botões indicadores (bolinhas) */}
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === activeIndex ? "bg-amber-300" : "bg-amber-100"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
