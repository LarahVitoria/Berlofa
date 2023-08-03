import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

interface ImageProps {
  img: string;
  titulo?: string;
  url?: string;
}

interface ImageGalleryProps {
  images: ImageProps[];
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
  const [hoveredIndexes, setHoveredIndexes] = useState<(number | null)[]>(
    images.map(() => null),
  );

  const handleMouseEnter = (index: number) => {
    setHoveredIndexes((prevState) => {
      const newHoveredIndexes = [...prevState];
      newHoveredIndexes[index] = index;
      return newHoveredIndexes;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndexes((prevState) => {
      const newHoveredIndexes = [...prevState];
      newHoveredIndexes[index] = null;
      return newHoveredIndexes;
    });
  };

  const cols = gridCols >= 1 ? gridCols : 1;

  const imageChunks: ImageProps[][] = [];
  const totalChunks = Math.ceil(images.length / cols);

  for (let i = 0; i < totalChunks; i++) {
    imageChunks.push(images.slice(i * cols, (i + 1) * cols));
  }

  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-16">
      {imageChunks.map((imageChunk, index) => (
        <React.Fragment key={index}>
          <div
            className={`grid gap-7 mb-5 ${
              cols === 1 ? "grid-cols-1" : `md:grid-cols-${cols}`
            }`}
          >
            {imageChunk.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className={`relative w-full ${cols === 2 ? "p-2" : ""}`}
                onMouseEnter={() => handleMouseEnter(index * cols + imgIndex)}
                onMouseLeave={() => handleMouseLeave(index * cols + imgIndex)}
              >
                <div
                  style={{
                    boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                  className="w-full h-64 md:h-56 lg:h-96 overflow-hidden"
                >
                  <img
                    alt={image.titulo}
                    className={`object-fill w-full h-full transition-transform ${
                      hoveredIndexes[index * cols + imgIndex] !== null
                        ? "scale-110"
                        : ""
                    }`}
                    loading="lazy"
                    src={image.img}
                  />
                </div>

                <CSSTransition
                  in={hoveredIndexes[index * cols + imgIndex] !== null}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                >
                  <div className="absolute inset-0 flex items-center justify-center flex-col bg-black bg-opacity-50 transition-opacity duration-300">
                    <h2 className="text-white text-4xl font-bold leading-8 mb-2 text-center">
                      {image.titulo}
                    </h2>
                    {showButton && (
                      <a
                        href={image.url}
                        className="text-white text-xl cursor-pointer"
                      >
                        Ver mais
                      </a>
                    )}
                  </div>
                </CSSTransition>
              </div>
            ))}
          </div>
          {showDivider && index !== imageChunks.length - 1 && (
            <hr
              className="my-6"
              style={{ borderColor: "#f5b502", height: "1px" }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ImageGallery;
