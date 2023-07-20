import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/MainPage/mainPage";
import Fachadas from "../pages/Fachadas/fachadas";
import Logotipo from "../pages/Logotipo/logotipo";
import Objeto from "../pages/Objeto/objeto";
import Pintura from "../pages/Pintura/pintura";
import Letreiro from "../pages/Letreiro/letreiro";
import Muros from "../pages/Muros/muros";
import Sobre from "../pages/Sobre/sobre";
import Contato from "../pages/Contato/contato";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fachadas" element={<Fachadas />} />
      <Route path="/logotipo" element={<Logotipo />} />
      <Route path="/objetosPersonalizados" element={<Objeto />} />
      <Route path="/pinturadeInteriores" element={<Pintura />} />
      <Route path="/letreiros" element={<Letreiro />} />
      <Route path="/murosdeAnuncios" element={<Muros />} />
      <Route path="/sobreNos" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
};
export default AppRoutes;
