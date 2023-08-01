import React from "react";
import Carousel from "../../components/Carrosel/carousel";
import ImageGallery from "../../components/ImagesGallery/imageGallery";
import d1 from "../../assets/DESTAQUES/d1.jpg";
import d2 from "../../assets/DESTAQUES/d2.jpg";
import d3 from "../../assets/DESTAQUES/d3.jpg";
import d4 from "../../assets/DESTAQUES/d4.jpg";
const MainPage: React.FC = () => {
  const destaque = [d1, d2, d3, d4];
  const images = [
    {
      img: d1,
      titulo: "Fachadas",
      url: "/fachadas",
    },
    {
      img: d2,
      titulo: "Fachadas",
      url: "/fachadas",
    },
    {
      img: d3,
      titulo: "Fachadas",
      url: "/fachadas",
    },
    {
      img: d4,
      titulo: "Fachadas",
      url: "/fachadas",
    },
  ];
  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Carousel images={destaque} interval={2500} />
      <hr
        className="my-6"
        style={{ borderColor: "#f5b502", height: "1px", width: "80%" }}
      />
      <ImageGallery images={images} gridCols={3} showButton={true} />
    </div>
  );
};

export default MainPage;
