import React from "react";
import bgContato from "../../assets/bgContato.jpg";
import Title from "../../components/Title/title";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import Ilustration from "../../assets/ilustration-contato.svg";

const Contato: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title color="#fff" backgroundImageUrl={bgContato} content="Contato" />
      <div className="container mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-start">
          <div>
            <p>
              Entre em contato conosco e deixe-nos tornar seus espaços
              extraordinários! Nossa equipe está pronta para ouvir suas ideias,
              responder às suas perguntas e oferecer soluções personalizadas
              para suas necessidades de pintura e decoração. Orçamentos a partir
              de R$500,00.
            </p>
            <div className="flex items-center py-4 ">
              <div className="w-12 h-12 bg-[#313131] rounded-lg flex items-center justify-center">
                <IoLocationOutline size={24} className="text-[#FFC727]" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg text-[#FFC727] font-bold">
                  Nossa localização
                </h2>
                <a
                  href="https://goo.gl/maps/Djp6Vm6K4qqoXeZZ7"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium"
                >
                  Rua Capitão Lisboa, 355 - Centro, Tatuí - SP
                </a>
              </div>
            </div>
            <div className="flex items-center py-4 ">
              <div className="w-12 h-12 bg-[#313131] rounded-lg flex items-center justify-center">
                <AiOutlineWhatsApp size={24} className="text-[#FFC727]" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg text-[#FFC727] font-bold">WhatsApp</h2>
                <a
                  href="https://wa.me/5515988145613?text=Ol%C3%A1%2C+estou+interessado%28a%29+no+seu+trabalho+e+gostaria+de+solicitar+um+or%C3%A7amento.+Poderia+me+dar+mais+informa%C3%A7%C3%B5es+sobre+o+assunto%3F+"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium"
                >
                  (15) 98814-5613
                </a>
              </div>
            </div>
            <div className="flex items-center py-4 ">
              <div className="w-12 h-12 bg-[#313131] rounded-lg flex items-center justify-center">
                <AiOutlineInstagram size={24} className="text-[#FFC727]" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg text-[#FFC727] font-bold">Instagram</h2>
                <a
                  href="https://www.instagram.com/cesarberlofa/"
                  className="text-gray-600 hover:text-gray-900 hover:font-medium"
                >
                  @cesarberlofa
                </a>
              </div>
            </div>
          </div>
          <img src={Ilustration} alt="Ilustração " />
        </div>
      </div>
      <a
        className="bg-[#ffc727]  hover:bg-black text-black hover:text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300"
        href="https://form.jotform.com/232015497370050"
      >
        Fazer Orçamento
      </a>
    </div>
  );
};

export default Contato;
