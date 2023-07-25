// src/components/depoimentoItem.tsx
import React from "react";

interface CarouselItemProps {
  active: boolean; // Adicionamos a propriedade 'active'
  name: string;
  role: string;
  avatarSrc: string;
  testimonial: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  active,
  name,
  role,
  avatarSrc,
  testimonial,
}) => {
  return (
    <div
      className={`carousel-item ${active ? "active" : ""}`}
      key={name} // Alteramos a chave para outra propriedade única, nesse caso, usaremos o nome (name)
    >
      <img
        src={avatarSrc}
        className="w-24 h-24 rounded-full mx-auto mb-4"
        alt={name}
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
      <p className="text-gray-800">{testimonial}</p>
    </div>
  );
};

export default CarouselItem;
