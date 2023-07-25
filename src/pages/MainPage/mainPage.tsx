import React from "react";
import Carousel from "../../components/Carrosel/carousel";
import ImageGallery from "../../components/ImagesGallery/imageGallery";

const MainPage: React.FC = () => {
  const images = [
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
  ];

  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Carousel images={images} interval={2500} />
      <hr
        className="my-6"
        style={{ borderColor: "#f5b502", height: "1px", width: "80%" }}
      />
      <ImageGallery images={images} gridCols={3} showButton={true} />
    </div>
  );
};

export default MainPage;
