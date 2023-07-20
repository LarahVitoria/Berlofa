import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Divider from "../Divider/divider";

interface ImageGalleryProps {
  images: string[];
  gridCols: number;
  showButton: boolean;
  showDivider?: boolean;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  gridCols,
  showButton,
  showDivider = true,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container mx-auto px-5">
      <div
        className={`grid gap-7 md:grid-cols-${gridCols}`}
        style={{
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
        }}
      >
        {images.map((image, index) => (
          <React.Fragment key={index}>
            {showDivider && index !== 0 && index % gridCols === 0 && (
              <div className={`flex justify-center col-span-${gridCols}`}>
                <Divider />
              </div>
            )}
            <div
              className={`relative cursor-pointer w-full`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px, rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
                }}
                className="w-full h-64 md:h-56 lg:h-96 overflow-hidden"
              >
                <img
                  alt={`gallery-${index}`}
                  className={`object-cover w-full h-full transition-transform ${
                    hoveredIndex === index ? "scale-110" : ""
                  }`}
                  src={image}
                />
              </div>

              <CSSTransition
                in={hoveredIndex === index}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <div className="absolute inset-0 flex items-center justify-center flex-col bg-black bg-opacity-50 transition-opacity duration-300">
                  <h2 className="text-white text-4xl font-bold leading-8 mb-2">
                    Título da Imagem {index + 1}
                  </h2>
                  {showButton && (
                    <button className="text-white text-xl">Botão</button>
                  )}
                </div>
              </CSSTransition>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
