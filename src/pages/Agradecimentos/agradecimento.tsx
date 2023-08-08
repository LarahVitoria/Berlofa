import React from "react";
import agradecimentoimg from "../../assets/agradecimento.svg";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Agradecimento: React.FC = () => {
  return (
    <div className=" p-4  grid md:grid-cols-2 grid-rows-2 gap-4 justify-center items-center">
      <img src={agradecimentoimg} alt="Imagem de agradecimento" />
      <div className=" md:p-8 p-1 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Obrigado por preencher o formulário!
        </h2>
        <p className="mb-3">Nossa equipe entrará em contato em breve.</p>
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:font-medium hover:text-black"
        >
          <BsArrowLeftCircle className="w-5 h-5 mr-2" /> Voltar para a página
          inicial
        </Link>
      </div>
    </div>
  );
};

export default Agradecimento;
