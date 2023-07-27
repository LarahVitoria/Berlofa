import React from "react";
import estagiario from "../../assets/images/estagiario.jpeg";
import gerenteAdmin from "../../assets/images/gerente-admin.jpg";
import gerenteFinanc from "../../assets/images/gerente-financ.jpg";
import gerenteVendas from "../../assets/images/gerente-vendas.jpeg";
import proprietario from "../../assets/images/proprietario.jpg";
import gerenteOp from "../../assets/images/gerente-op.webp";

const TeamMember = ({ name, role, imageUrl }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={imageUrl}
        alt={name}
        className="rounded-full w-24 h-24 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-[#F5B502]">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: "César Berlofa",
      role: "Proprietário/ Artista ",
      imageUrl: proprietario,
    },
    {
      name: "Micael Caik de Moraes",
      role: "Gerente de Vendas ",
      imageUrl: gerenteVendas,
    },
    {
      name: "Rosana Bernardes",
      role: "Gerente Financeira ",
      imageUrl: gerenteFinanc,
    },
    {
      name: "Caroline Campos",
      role: "Gerente Administrativa ",
      imageUrl: gerenteAdmin,
    },
    {
      name: "Luis Paulo Casemiro",
      role: "Gerente Operacional ",
      imageUrl: gerenteOp,
    },
    {
      name: "Guilherme Schramm",
      role: "Estagiário",
      imageUrl: estagiario,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-px my-8 bg-[#F5B502] border-0 dark:bg-gray-700" />
        <span className="absolute px-3 text-[#F5B502] text-xl md:text-3xl text-center font-semibold -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          Nossa Equipe
        </span>
      </div>
      <p className="text-gray-600 mb-8 text-center">
        Conheça nossa equipe por trás da Berlofa Arte & Pintura! Talentosos e
        apaixonados, estamos prontos para transformar sua visão em realidade.
        Juntos, criamos obras de arte únicas e inspiradoras.
      </p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
