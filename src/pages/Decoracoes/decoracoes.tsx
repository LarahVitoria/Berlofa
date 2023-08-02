import React from "react";
import bgAmarelo from "../../assets/bgAmarelo.jpg";
import ImageGallery from "../../components/ImagesGallery/imageGallery";
import Title from "../../components/Title/title";
import d1 from "../../assets/Decorações/d1.jpg";
import d2 from "../../assets/Decorações/d2.jpg";
import d3 from "../../assets/Decorações/d3.jpg";

const Decoracoes: React.FC = () => {
  const images = [{ img: d3 }, { img: d2 }, { img: d1 }];

  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title color="#fff" content="Decoraçoes" backgroundImageUrl={bgAmarelo} />
      <ImageGallery
        images={images}
        gridCols={2}
        showButton={false}
        showDivider={false}
      />
    </div>
  );
};

export default Decoracoes;
