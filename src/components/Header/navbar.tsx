import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./sidebar";
import logo from "../../assets/logo.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="shadow-md flex justify-between xl:px-44">
      <div className="m-3 ">
        <a href="/">
          <img src={logo} width={"150px"} alt="Belofa" loading="lazy" />
        </a>
      </div>
      <div className="flex items-center">
        <button
          className="bg-[#ffc727] hover:bg-black text-black hover:text-white px-4 py-2 rounded-full font-semibold shadow-lg transition-all duration-300 uppercase text-sm md:text-base"
          onClick={() =>
            (window.location.href = "https://form.jotform.com/232015497370050")
          }
        >
          Orçamento
        </button>
        <button
          onClick={toggleMenu}
          className="right-0 top-0 md:m-4 m-1 p-2 bg-transparent text-slate-800 hover:text-amber-400"
        >
          <FiMenu style={{ color: "#000" }} size={35} />
        </button>
      </div>

      <Sidebar isOpen={isOpen} onClose={closeMenu} />
    </nav>
  );
};

export default Navbar;
