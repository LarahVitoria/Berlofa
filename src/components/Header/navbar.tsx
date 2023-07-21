import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./sidebar";
import logo from "../../assets/logo-cesar.svg";

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
          <img src={logo} width={"150px"} alt="Belofa" />
        </a>
      </div>

      <button
        onClick={toggleMenu}
        className="right-0 top-0 m-4 p-2 bg-transparent text-slate-800 hover:text-amber-400"
      >
        <FiMenu style={{ color: "#000" }} size={35} />
      </button>
      <Sidebar isOpen={isOpen} onClose={closeMenu} />
    </nav>
  );
};

export default Navbar;
