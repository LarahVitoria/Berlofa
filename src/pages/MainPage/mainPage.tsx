import React from "react";
import Carousel from "../../components/Carrosel/carousel";
import ImageGallery from "../../components/ImagesGallery/imageGallery";
import d1 from "../../assets/DESTAQUES/d1.jpg";
import d2 from "../../assets/DESTAQUES/d2.png";
import d3 from "../../assets/DESTAQUES/d3.jpg";
import d4 from "../../assets/DESTAQUES/d4.jpg";
import d5 from "../../assets/DESTAQUES/d5.jpg";
import img1 from "../../assets/LOGOTIPO + LETREIROS/l12.png";
import img2 from "../../assets/Decorações/d2.jpg";
import img3 from "../../assets/Arte Botânica/b3.jpg";
import img4 from "../../assets/FACHADAS/f5.png";
import img5 from "../../assets/MUROS DE ANÚNCIOS/a1.jpg";
import img6 from "../../assets/PINTURA EM AÇOS/p6.png";
import img7 from "../../assets/REALISTAS/r18.jpg";

const MainPage: React.FC = () => {
  const destaque = [d1, d2, d3, d4, d5];
  const images = [
    {
      img: img4,
      titulo: "FACHADAS",
      url: "/fachadas",
    },
    {
      img: img1,
      titulo: "LETREIROS E LOGOTIPOS",
      url: "/letreiroselogotipos",
    },
    {
      img: img7,
      titulo: "REALISTAS",
      url: "/realistas",
    },
    {
      img: img5,
      titulo: "MUROS DE ANÚNCIOS",
      url: "/murosdeanuncios",
    },
    {
      img: img3,
      titulo: "ARTE BOTÂNICA",
      url: "/botanica",
    },
    {
      img: img6,
      titulo: "PINTURA EM AÇOS",
      url: "/pinturaemaco",
    },
    {
      img: img2,
      titulo: "DECORAÇÕES",
      url: "/decoracoes",
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
