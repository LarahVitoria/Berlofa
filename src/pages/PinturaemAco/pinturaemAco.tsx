import React from "react";
import bgAmarelo from "../../assets/bgAmarelo.jpg";
import ImageGallery from "../../components/ImagesGallery/imageGallery";
import Title from "../../components/Title/title";
import p1 from "../../assets/PINTURA EM AÇOS/p1.png";
import p2 from "../../assets/PINTURA EM AÇOS/p2.jpg";
import p3 from "../../assets/PINTURA EM AÇOS/p3.jpg";
import p4 from "../../assets/PINTURA EM AÇOS/p4.png";
import p5 from "../../assets/PINTURA EM AÇOS/p5.png";
import p6 from "../../assets/PINTURA EM AÇOS/p6.png";
import p7 from "../../assets/PINTURA EM AÇOS/p7.png";
import l7 from "../../assets/LOGOTIPO + LETREIROS/l7.png";
import l12 from "../../assets/LOGOTIPO + LETREIROS/l12.png";

const PinturaemAco: React.FC = () => {
  const images = [
    { img: p3 },
    { img: p4 },
    { img: p5 },
    { img: p1 },
    { img: l12 },
    { img: l7 },
    { img: p6 },
    { img: p7 },
    { img: p2 },
  ];

  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title
        color="#fff"
        content="Pinturas em aços"
        backgroundImageUrl={bgAmarelo}
      />
      <ImageGallery
        images={images}
        gridCols={2}
        showButton={false}
        showDivider={false}
      />
    </div>
  );
};

export default PinturaemAco;
