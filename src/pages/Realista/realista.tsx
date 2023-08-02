import React from "react";
import bgAmarelo from "../../assets/bgAmarelo.jpg";
import ImageGallery from "../../components/ImagesGallery/imageGallery";
import Title from "../../components/Title/title";
import r1 from "../../assets/REALISTAS/r1.jpg";
import r2 from "../../assets/REALISTAS/r2.jpg";
import r3 from "../../assets/REALISTAS/r3.jpg";
import r4 from "../../assets/REALISTAS/r4.jpg";
import r5 from "../../assets/REALISTAS/r5.jpg";
import r6 from "../../assets/REALISTAS/r6.jpg";
import r7 from "../../assets/REALISTAS/r7.jpg";
import r8 from "../../assets/REALISTAS/r8.jpg";
import r9 from "../../assets/REALISTAS/r9.jpg";
import r10 from "../../assets/REALISTAS/r10.jpg";
import r11 from "../../assets/REALISTAS/r11.jpg";
import r12 from "../../assets/REALISTAS/r12.jpg";
import r13 from "../../assets/REALISTAS/r13.jpg";
import r14 from "../../assets/REALISTAS/r14.jpg";
import r15 from "../../assets/REALISTAS/r15.jpg";
import r16 from "../../assets/REALISTAS/r16.jpg";
import r17 from "../../assets/REALISTAS/r17.jpg";
import r18 from "../../assets/REALISTAS/r18.jpg";
import r19 from "../../assets/REALISTAS/r19.png";
import r20 from "../../assets/REALISTAS/r20.png";
import r21 from "../../assets/REALISTAS/r21.png";
import r22 from "../../assets/REALISTAS/r22.png";

const Realista: React.FC = () => {
  const images = [
    { img: r3 },
    { img: r4 },
    { img: r5 },
    { img: r1 },
    { img: r6 },
    { img: r7 },
    { img: r2 },
    { img: r8 },
    { img: r9 },
    { img: r10 },
    { img: r11 },
    { img: r12 },
    { img: r13 },
    { img: r14 },
    { img: r15 },
    { img: r16 },
    { img: r17 },
    { img: r18 },
    { img: r19 },
    { img: r20 },
    { img: r21 },
    { img: r22 },
  ];

  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title color="#fff" content="Realistas" backgroundImageUrl={bgAmarelo} />
      <ImageGallery
        images={images}
        gridCols={2}
        showButton={false}
        showDivider={false}
      />
    </div>
  );
};

export default Realista;
