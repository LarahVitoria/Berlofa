import React from "react";
import bgSobre2 from "../../assets/bgSobre.jpg";
import Title from "../../components/Title/title";
import Team from "../../components/Time/time";
import Testimonials from "../../components/Depoimento/depoimento";
import Metologia from "../../components/ComoTrabalhamos/metodologia";

const Sobre: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title color="#000" content="Sobre Nós" backgroundImageUrl={bgSobre2} />

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Coluna de texto */}
        <div className="p-2">
          <h2 className="text-xl font-bold">Nossa história</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            convallis dolor, id euismod nulla. Integer rhoncus ac ipsum ac
            cursus. Sed eu bibendum elit. Ut eu congue velit.
          </p>
        </div>

        {/* Coluna de imagens */}
        <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
          <img
            src="https://via.placeholder.com/200"
            alt="Imagem 1"
            className="w-full mb-4"
          />
          <img
            src="https://via.placeholder.com/200"
            alt="Imagem 2"
            className="w-full mb-4"
          />
          <img
            src="https://via.placeholder.com/200"
            alt="Imagem 3"
            className="w-full mb-4"
          />
        </div>
      </div>
      <Metologia />

      <Team />
      <Testimonials />
    </div>
  );
};

export default Sobre;
