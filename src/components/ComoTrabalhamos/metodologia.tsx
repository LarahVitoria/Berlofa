import React from "react";
import { FaRegHandshake, FaTools, FaRegCheckCircle } from "react-icons/fa";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Metodologia = () => {
  const stepsData = [
    {
      number: "1º",
      title: "Atendimento",
      description: "Priorizamos um atendimento cortês e eficaz.",
    },
    {
      number: "2º",
      title: "Coleta de Informações",
      description: "Entendemos suas necessidades detalhadamente.",
    },
    {
      number: "3º",
      title: "Layout",
      description: "Criamos esboços personalizados para você.",
    },
    {
      number: "4º",
      title: "Aprovação",
      description: "Seu feedback é crucial para finalizar o layout.",
    },
    {
      number: "5º",
      title: "Orçamento",
      description: "Apresentamos uma estimativa detalhada de custos.",
    },
    {
      number: "6º",
      title: "Execução",
      description: "Iniciamos o trabalho após a assinatura do contrato.",
    },
    {
      number: "7º",
      title: "Entrega",
      description: "Garantimos a satisfação após a entrega.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-8 bg-[#F5B502] border-0 " />
        <span className="absolute px-3 text-[#F5B502] text-xl md:text-xl text-center md:text-3xl font-semibold -translate-x-1/2 bg-white left-1/2 ">
          Nosso Compromisso
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <FaRegHandshake className="text-4xl text-[#F5B502]" />
        <h2 className="text-xl font-bold text-center md:text-left">
          Garantia de Durabilidade de 5 Anos
        </h2>
      </div>
      <p className="text-lg text-center md:text-left">
        Nossos serviços oferecem uma cobertura com material de excelência,
        utilizando a renomada marca SUVINIL - Esmalte sintético/Base solvente.
        Garantimos que não haverá desgaste antes do período estipulado,
        proporcionando uma pintura duradoura e impecável.
      </p>

      <hr className="my-4" />

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <FaTools className="text-4xl text-[#F5B502]" />
        <h2 className="text-xl font-bold text-center md:text-left">
          Mão de Obra Qualificada
        </h2>
      </div>
      <p className="text-lg text-center md:text-left">
        Contamos com uma equipe altamente qualificada, dedicada a executar cada
        etapa do processo com precisão e habilidade. Desde a preparação até o
        acabamento final, todos os cuidados necessários serão estritamente
        respeitados.
      </p>

      <hr className="my-4" />

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <FaRegCheckCircle className="text-4xl text-[#F5B502]" />
        <h2 className="text-xl font-bold text-center md:text-left">
          Controle de Qualidade Rigoroso
        </h2>
      </div>
      <p className="text-lg text-center md:text-left">
        Cada etapa do processo é minuciosamente avaliada, desde a seleção da
        matéria-prima até a entrega final. Não nos baseamos apenas na qualidade
        e durabilidade do material, mas também na excelência da execução de cada
        processo.
      </p>

      <hr className="my-4" />

      <div className="font-bold">
        <p className="text-lg text-center md:text-left">
          Seu projeto estará em mãos de profissionais comprometidos com a
          excelência e que priorizam a satisfação de nossos clientes. Confie em
          nossa experiência e dedicação para transformar seus espaços em
          verdadeiras obras de arte, que resistirão ao teste do tempo.
        </p>
      </div>

      <div className="inline-flex items-center justify-center w-full mt-8">
        <hr className="w-full h-px my-8 bg-[#F5B502] border-0" />
        <span className="absolute px-3 text-[#F5B502] text-xl md:text-3xl text-center font-semibold -translate-x-1/2 bg-white left-1/2 ">
          Metodologia
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
        {stepsData.map((step, index) => (
          <div
            key={step.number}
            className={`flex flex-col items-center justify-center px-3.5 fadeIn ${
              index === 0 ? "md:col-span-2 text-center" : ""
            }`}
          >
            <div className="flex">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F5B502] text-white text-xl font-bold mb-2">
                {step.number}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            <hr className="divide-x-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metodologia;
