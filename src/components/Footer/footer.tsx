import React, { useEffect, useState } from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import bgImage from "../../assets/bgFooter.jpg";
import logo from "../../assets/logo-cesar-amarela.svg";
import "./footer.css";

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
      <div className="container mx-auto px-2 lg:px-32 flex items-center justify-between h-full">
        <img src={logo} className="w-28 md:w-48" alt="Berlofa" />
        <p className="text-sm md:text-lg font-semibold">
          © {new Date().getFullYear()}
          <a className="cursor-pointer"> - Desenvolvido por Larah</a>
        </p>
        <div className="flex justify-between">
          <a href="https://wa.me/5515988145613?text=Ol%C3%A1%2C+estou+interessado%28a%29+no+seu+trabalho+e+gostaria+de+solicitar+um+or%C3%A7amento.+Poderia+me+dar+mais+informa%C3%A7%C3%B5es+sobre+o+assunto%3F+">
            <AiOutlineWhatsApp className="w-6 md:w-9 h-6 md:h-9 md:mx-2" />
          </a>
          <a href="https://www.instagram.com/cesarberlofa/">
            <AiOutlineInstagram className="w-6 md:w-9 h-6 md:h-9 md:mx-2" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
