import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showStatus={false}
    >
      <div>
        <img src="https://via.placeholder.com/100" alt="Image 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/100" alt="Image 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/100" alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
