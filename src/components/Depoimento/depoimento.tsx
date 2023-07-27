import React, { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import bgDepoimento from "../../assets/bgDepoimento.jpg";
const TestimonialCarousel: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Leroy Jenkins",
      role: "CEO of Company Co.",
      avatarSrc: "https://source.unsplash.com/random/100x100?4",
      testimonial:
        "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!",
    },
    {
      id: 2,
      name: "Laraa Jenkins",
      role: "CEO of Company Co.",
      avatarSrc: "https://source.unsplash.com/random/100x100?4",
      testimonial:
        "Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae? Rem unde atque mollitia!",
    },
    // Adicione mais depoimentos aqui
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    const currentIndex = testimonials.findIndex(
      (testimonial) => testimonial.id === activeTestimonial.id,
    );
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setActiveTestimonial(testimonials[nextIndex]);
    setActiveIndex(nextIndex);
  };

  const prevTestimonial = () => {
    const currentIndex = testimonials.findIndex(
      (testimonial) => testimonial.id === activeTestimonial.id,
    );
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setActiveTestimonial(testimonials[prevIndex]);
    setActiveIndex(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTestimonial]);

  return (
    <section className="p-6">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-8 bg-[#F5B502] border-0 dark:bg-gray-700" />
        <span className="absolute px-3 text-[#F5B502] text-xl md:text-3xl text-center font-semibold -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          Depoimentos
        </span>
      </div>
      <p className="text-gray-600 mb-8 text-center">
        Confira o que nossos clientes têm a dizer sobre nossa empresa e
        serviços. Satisfação garantida em cada projeto!
      </p>
      <div className="container max-w-xl mx-auto">
        <div className="relative">
          <div
            style={{
              borderRadius: "8px",
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.62) 100%), url(${bgDepoimento}), lightgray 50% / cover no-repeat`,
            }}
            className="flex flex-col md:flex-row md:items-center justify-center w-full p-6 lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100 relative"
          >
            <div className="md:mr-8 flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={activeTestimonial.avatarSrc}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex-grow flex justify-center flex-col">
              <blockquote className="max-w-lg text-center sm:text-left  text-lg italic text-[#F5B502]">
                "{activeTestimonial.testimonial}"
              </blockquote>
              <div className="text-center md:text-left text-[#F5B502]">
                <p className="my-2 font-extrabold">{activeTestimonial.name}</p>
                <p className="text-[#F5B502]">{activeTestimonial.role}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            {/* Botões indicadores (bolinhas) */}
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === activeIndex
                    ? "bg-blue-500"
                    : "bg-blue-200 dark:bg-gray-600"
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
