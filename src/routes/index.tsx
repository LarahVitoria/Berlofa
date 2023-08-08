import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/MainPage/mainPage";
import Fachadas from "../pages/Fachadas/fachadas";
import Logotipo from "../pages/Logotipo/logotipo";
import Realista from "../pages/Realista/realista";
import PinturaemAco from "../pages/PinturaemAco/pinturaemAco";
import Decoracoes from "../pages/Decoracoes/decoracoes";
import Muros from "../pages/Muros/muros";
import Sobre from "../pages/Sobre/sobre";
import Contato from "../pages/Contato/contato";
import Botanica from "../pages/Botanica/botanica";
import Agradecimento from "../pages/Agradecimentos/agradecimento";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fachadas" element={<Fachadas />} />
      <Route path="/letreiroselogotipos" element={<Logotipo />} />
      <Route path="/realistas" element={<Realista />} />
      <Route path="/murosdeanuncios" element={<Muros />} />
      <Route path="/botanica" element={<Botanica />} />
      <Route path="/pinturaemaco" element={<PinturaemAco />} />
      <Route path="/decoracoes" element={<Decoracoes />} />
      <Route path="/sobrenos" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/agradecimentos" element={<Agradecimento />} />
    </Routes>
  );
};
export default AppRoutes;
