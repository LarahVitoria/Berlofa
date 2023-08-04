import React from "react";
import bgAmarelo from "../../assets/bgAmarelo.jpg";
import a1 from "../../assets/MUROS DE ANÚNCIOS/a1.jpg";
import a2 from "../../assets/MUROS DE ANÚNCIOS/a2.png";
import a3 from "../../assets/MUROS DE ANÚNCIOS/a3.png";
import a4 from "../../assets/MUROS DE ANÚNCIOS/a4.png";
import a5 from "../../assets/MUROS DE ANÚNCIOS/a5.png";
import a6 from "../../assets/MUROS DE ANÚNCIOS/a6.png";
import a7 from "../../assets/MUROS DE ANÚNCIOS/a7.png";
import ImageGallery from "../../components/ImagesGallery/imageGallery";
import Title from "../../components/Title/title";

const Muros: React.FC = () => {
  const images = [
    { img: a1 },
    { img: a2 },
    { img: a3 },
    { img: a4 },
    { img: a5 },
    { img: a6 },
    { img: a7 },
  ];

  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title
        color="#fff"
        content="Muros de Anúncios"
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

export default Muros;
