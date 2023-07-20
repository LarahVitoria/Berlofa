import React from "react";

interface CarouselItemProps {
  imageUrl: string;
  altText: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ imageUrl, altText }) => {
  return (
    <div className="w-full h-64">
      <img
        className="object-cover w-full h-full"
        src={imageUrl}
        alt={altText}
      />
    </div>
  );
};

export default CarouselItem;
