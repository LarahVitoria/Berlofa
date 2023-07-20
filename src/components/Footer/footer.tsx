// src/components/Footer/footer.tsx

import React, { useEffect, useState } from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import bgImage from "../../assets/footerbg.jpg";
import logo from "../../assets/logo-cesar-amarela.svg";
import "./footer.css"; // Certifique-se de ter um arquivo CSS para importar e aplicar estilos adicionais se necessário

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollPos = window.scrollY;

      // Define uma porcentagem do final da página (por exemplo, 10%)
      const endOfPageThreshold = 0.1;

      // Calcula a posição que representa 10% antes do final da página
      const endOfPagePos =
        scrolledHeight - clientHeight - scrolledHeight * endOfPageThreshold;

      if (scrollPos >= endOfPagePos) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer
      ref={ref}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: isVisible ? "11vh" : "0",
        transition: "height 0.5s",
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: 999,
      }}
      className="w-full text-[#f5b502] bg-no-repeat bg-cover"
    >
      <div className="container mx-auto px-5 lg:px-32 flex items-center justify-between h-full">
        <img src={logo} width={"200px"} alt="Berlofa" />
        <p className="text-lg font-semibold">
          © {new Date().getFullYear()}
          <a className="cursor-pointer"> - Desenvolvido por Larah Vitória </a>
        </p>
        <div className="flex justify-between">
          <AiOutlineInstagram size={35} />
          <AiOutlineWhatsApp size={35} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
