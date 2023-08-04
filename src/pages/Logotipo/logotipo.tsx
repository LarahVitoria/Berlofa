import React from "react";
import bgAmarelo from "../../assets/bgAmarelo.jpg";
import ImageGallery from "../../components/ImagesGallery/imageGallery";
import Title from "../../components/Title/title";
import l1 from "../../assets/LOGOTIPO + LETREIROS/l1.jpg";
import l2 from "../../assets/LOGOTIPO + LETREIROS/l2.jpg";
import l3 from "../../assets/LOGOTIPO + LETREIROS/l3.jpg";
import l4 from "../../assets/LOGOTIPO + LETREIROS/l4.jpg";
import l6 from "../../assets/LOGOTIPO + LETREIROS/l6.jpg";
import l5 from "../../assets/LOGOTIPO + LETREIROS/l5.jpg";
import l8 from "../../assets/LOGOTIPO + LETREIROS/l8.png";
import l9 from "../../assets/LOGOTIPO + LETREIROS/l9.png";
import l10 from "../../assets/LOGOTIPO + LETREIROS/l10.png";
import l11 from "../../assets/LOGOTIPO + LETREIROS/l11.png";

const Logotipo: React.FC = () => {
  const images = [
    { img: l3 },
    { img: l4 },
    { img: l6 },
    { img: l1 },
    { img: l5 },
    { img: l2 },
    { img: l8 },
    { img: l9 },
    { img: l10 },
    { img: l11 },
  ];
  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title
        color="#fff"
        content="Letreiros e logotipos "
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

export default Logotipo;
