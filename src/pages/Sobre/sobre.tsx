import React from "react";
import bgSobre2 from "../../assets/bgSobre.jpg";
import Title from "../../components/Title/title";
import Team from "../../components/Time/time";
import Testimonials from "../../components/Depoimento/depoimento";
import Metologia from "../../components/ComoTrabalhamos/metodologia";

const Sobre: React.FC = () => {
  const testimonials = [
    {
      id: 0,
      name: "Roller Land",
      role: "",
      avatarSrc: "https://source.unsplash.com/random/100x100?4",
      testimonial:
        "Quando pensamos em qualidade de serviço logo pensamos no Berlofa pois confiamos no seu trabalho incrível, a arte que ele fez trouxe ao espaço um diferencial onde todos ao entrar se deparam com a pintura na parede e se encantam com cada detalhe...desta forma somos grato pelo seu trabalho e dedicação!",
    },
    {
      id: 1,
      name: "Toninho Bicudo",
      role: "",
      avatarSrc: "https://source.unsplash.com/random/100x100?4",
      testimonial:
        "Esclareço aos futuros clientes aqueles que ainda não tiveram a oportunidade de conhecer os serviços desses excelentes profissionais que o contratem, pois eu fiz trabalhos artísticos com eles e fiquei muito contente",
    },
    {
      id: 2,
      name: "Quallycred",
      role: "",
      avatarSrc: "https://source.unsplash.com/random/100x100?4",
      testimonial:
        "Só temos a elogiar o pessoal da equipe Berlofa, o César é super atencioso e com um trabalho sensacional, todos sempre prontos a nos atender, faz anos já que temos esta parceria, fazendo um ótimo trabalho e arrasando nas artes, sempre atendendo os nossos pedidos.",
    },
    {
      id: 3,
      name: "José Roberto Siqueira Junior ",
      role: "",
      avatarSrc: "https://source.unsplash.com/random/100x100?4",
      testimonial:
        "Recomendo o trabalho de César Berlofa, um ótimo profissional, com uma ótima bagagem técnica; o qual executou um belíssimo trabalho em meu portão",
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title color="#000" content="Sobre Nós" backgroundImageUrl={bgSobre2} />

      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {/* Coluna de texto */}
        <div className="p-2">
          <h2 className="text-xl font-bold">Nossa história</h2>
          <p className="mt-4">
            A Berlofa arte e pintura nasceu da paixão pela arte e a vontade
            incontrolável de empreender. No início éramos um só artista, eu
            César Berlofa, logo vi necessidade de uma equipe, pelo fato de meu
            filho estar nascendo e eu não poder estar em todos os lugares ao
            mesmo tempo. Criamos uma equipe grande com advogado, administrativo
            e operacional. Não foi o suficiente, pois a caminhada ainda era
            longa para que tudo se encaixasse, então fomos obrigados a desfazer
            tudo! Desde equipe até mesmo venda de novos trabalhos. Paramos tudo,
            entregamos os trabalhos que estavam em andamento e recomeçamos!
            Agora sim com um alicerce muito mais profundo e firme, nos
            aprimoramos na arte e em tudo que ela podia oferecer. Das técnicas
            mais difíceis até as mais simples, nos melhoramos tudo, para que a
            entrega fosse 100%. Mas ainda não estávamos contentes, então
            decidimos agregar uma equipe administrativa e de propaganda, nos
            aprofundando em melhor atender os clientes desde assinatura do
            contrato até depois da entrega do trabalho. Hoje temos nossa sede,
            no centro de Tatuí e já contamos com mais de 10 cidades por o de
            passamos e deixamos nosso trabalho alegrando a vista para quem
            passar. Hoje temos a honra de dizer que somos a maior empresa de
            pintura de Tatuí, contando com serviços para fachadas de
            empreendimentos, decorações interna para casas e empresas, pintura
            de base em geral, muros de anúncio e personalização de itens.
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
      <Testimonials intervalTime={6000} testimonials={testimonials} />
    </div>
  );
};

export default Sobre;
