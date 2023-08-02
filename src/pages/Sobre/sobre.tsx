import React from "react";
import bgSobre2 from "../../assets/bgSobre.jpg";
import Title from "../../components/Title/title";
import Team from "../../components/Time/time";
import Testimonials from "../../components/Depoimento/depoimento";
import Metologia from "../../components/ComoTrabalhamos/metodologia";
import dep1 from "../../assets/dep1.jpeg";
import dep2 from "../../assets/dep2.jpeg";
import dep3 from "../../assets/dep3.png";
import dep4 from "../../assets/dep4.png";
import dep5 from "../../assets/dep5.png";
import dep6 from "../../assets/dep6.png";

const Sobre: React.FC = () => {
  const testimonials = [
    {
      id: 0,
      name: "Roller Land",
      avatarSrc: dep1,
      testimonial:
        "Quando pensamos em qualidade de serviço logo pensamos no Berlofa pois confiamos no seu trabalho incrível, a arte que ele fez trouxe ao espaço um diferencial onde todos ao entrar se deparam com a pintura na parede e se encantam com cada detalhe...desta forma somos grato pelo seu trabalho e dedicação!",
    },
    {
      id: 1,
      name: "Toninho Bicudo",
      avatarSrc: dep2,
      testimonial:
        "Esclareço aos futuros clientes aqueles que ainda não tiveram a oportunidade de conhecer os serviços desses excelentes profissionais que o contratem, pois eu fiz trabalhos artísticos com eles e fiquei muito contente",
    },
    {
      id: 2,
      name: "Quallycred",
      avatarSrc: dep3,
      testimonial:
        "Só temos a elogiar o pessoal da equipe Berlofa, o César é super atencioso e com um trabalho sensacional, todos sempre prontos a nos atender, faz anos já que temos esta parceria, fazendo um ótimo trabalho e arrasando nas artes, sempre atendendo os nossos pedidos.",
    },
    {
      id: 3,
      name: "José Roberto Siqueira Junior ",
      avatarSrc: dep4,
      testimonial:
        "Recomendo o trabalho de César Berlofa, um ótimo profissional, com uma ótima bagagem técnica; o qual executou um belíssimo trabalho em meu portão",
    },
    {
      id: 4,
      name: "Empório Goiano",
      avatarSrc: dep5,
      testimonial:
        "Nós da Empório Goiano estamos muito satisfeitos e contentes com o resultado do trabalho!! A equipe foi profissional e cuidadosa, além de entregar um trabalho impecável, que com certeza deu vida para nosso restaurante, deixando mais acolhedor e bonito",
    },
    {
      id: 5,
      name: "Bar Gold Bar ",
      avatarSrc: dep6,
      testimonial:
        "É com muito prazer que nós da Bar Gold Bar indicamos a empresa Berlofa Arte e Pinturas, pois graças a eles com a arte feita em nossos muros de anúncio, a empresa não ganhou apenas mais visibilidade, mas também ganhou mais vida. Entrega pontual, todos os processos como combinado.",
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
            A Berlofa Arte e Pintura nasceu da paixão pela arte e da vontade
            incontrolável de empreender. No início, éramos um único artista, eu,
            César Berlofa. Logo, percebi a necessidade de formar uma equipe,
            pois meu filho estava nascendo e eu não poderia estar em todos os
            lugares ao mesmo tempo. Criamos uma equipe grande, incluindo
            advogado, administrativo e operacional. No entanto, isso não foi
            suficiente, pois a jornada ainda era longa para que tudo se
            encaixasse, então fomos obrigados a desfazer tudo! Desde a equipe
            até mesmo a venda de novos trabalhos. Paramos tudo, entregamos os
          </p>
          projetos que estavam em andamento e recomeçamos!
          <p className="mt-4">
            Agora sim, com um alicerce muito mais profundo e firme, aprimoramos
            nossas habilidades na arte e em tudo que ela podia oferecer.
            Dominamos desde as técnicas mais difíceis até as mais simples,
            aprimorando tudo, para que a entrega fosse 100% satisfatória. Ainda
            assim, não estávamos satisfeitos e decidimos agregar uma equipe
            administrativa e de propaganda, aprofundando-nos em proporcionar um
            melhor atendimento aos clientes, desde a assinatura do contrato até
            depois da entrega do trabalho.
          </p>
          <p className="mt-4">
            Hoje, temos nossa sede no centro de Tatuí e já atendemos mais de 10
            cidades, onde deixamos nosso trabalho alegrando a vista de quem
            passa. Temos a honra de dizer que somos a maior empresa de pintura
            de Tatuí, oferecendo serviços para fachadas de empreendimentos,
            decorações internas para casas e empresas, pintura de base em geral,
            muros de anúncio e personalização de itens.
          </p>
        </div>

        {/* Coluna de imagens */}
        <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
          <img
            src="https://via.placeholder.com/200"
            alt="Imagem 1"
            className="w-full mb-4"
            loading="lazy"
          />
          <img
            src="https://via.placeholder.com/200"
            alt="Imagem 2"
            className="w-full mb-4"
            loading="lazy"
          />
          <img
            src="https://via.placeholder.com/200"
            alt="Imagem 3"
            className="w-full mb-4"
            loading="lazy"
          />
        </div>
      </div>
      <Metologia />

      <Team />
      <Testimonials testimonials={testimonials} intervalTime={5000} />
    </div>
  );
};

export default Sobre;
