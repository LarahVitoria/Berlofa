import React from "react";
import bgAmarelo from "../../assets/bgAmarelo.jpg";
import b1 from "../../assets/Arte Botânica/b1.jpg";
import b2 from "../../assets/Arte Botânica/b2.jpg";
import b3 from "../../assets/Arte Botânica/b3.jpg";
import b4 from "../../assets/Arte Botânica/b4.jpg";
import ImageGallery from "../../components/ImagesGallery/imageGallery";
import Title from "../../components/Title/title";

const Botanica: React.FC = () => {
  const images = [{ img: b3 }, { img: b4 }, { img: b2 }, { img: b1 }];

  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title
        color="#fff"
        content="Arte Botânica"
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

export default Botanica;
