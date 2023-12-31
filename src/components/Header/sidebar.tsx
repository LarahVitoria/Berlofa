import React, { useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import "./style.css";
import bgImage from "../../assets/sidebg.jpg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={`fixed z-50 right-0 sm:w-fit  w-full top-0 h-screen p-6 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center">
        <button onClick={onClose} className="bg-transparent text-white ">
          <FiX size={40} />
        </button>
        <ul className="p-4 flex flex-col items-center">
          <li className="custom-list-item ">
            <a href="/">HOME</a>
          </li>
          <li className=" custom-list-item">
            <a href="fachadas">FACHADAS</a>
          </li>
          <li className=" custom-list-item">
            <a href="letreiroselogotipos">LETREIROS E LOGOTIPOS</a>
          </li>
          <li className=" custom-list-item">
            <a href="realistas">REALISTAS</a>
          </li>
          <li className=" custom-list-item">
            <a href="murosdeanuncios">MUROS DE ANÚNCIOS</a>
          </li>
          <li className=" custom-list-item">
            <a href="botanica">ARTE BOTÂNICA</a>
          </li>
          <li className=" custom-list-item">
            <a href="pinturaemaco">PINTURA EM AÇOS</a>
          </li>
          <li className=" custom-list-item">
            <a href="decoracoes">DECORAÇÕES</a>
          </li>
          <li className=" custom-list-item">
            <a href="sobrenos">SOBRE NÓS</a>
          </li>
          <li className=" custom-list-item">
            <a href="contato">CONTATO</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
