import React from "react";
import bgAmarelo from "../../assets/bgAmarelo.jpg";
import f1 from "../../assets/FACHADAS/f1.jpg";
import f2 from "../../assets/FACHADAS/f2.jpg";
import f3 from "../../assets/FACHADAS/f3.jpg";
import f4 from "../../assets/FACHADAS/f4.jpg";
import f5 from "../../assets/FACHADAS/f5.png";
import f6 from "../../assets/FACHADAS/f6.png";
import f7 from "../../assets/FACHADAS/f7.png";
import f8 from "../../assets/FACHADAS/f8.png";
import ImageGallery from "../../components/ImagesGallery/imageGallery";
import Title from "../../components/Title/title";

const Fachadas: React.FC = () => {
  const images = [
    { img: f1 },
    { img: f2 },
    { img: f3 },
    { img: f4 },
    { img: f5 },
    { img: f6 },
    { img: f7 },
    { img: f8 },
  ];

  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title color="#fff" content="Fachadas" backgroundImageUrl={bgAmarelo} />
      <ImageGallery
        images={images}
        gridCols={2}
        showButton={false}
        showDivider={false}
      />
    </div>
  );
};

export default Fachadas;
