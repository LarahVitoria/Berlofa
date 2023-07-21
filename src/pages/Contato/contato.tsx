import React from "react";
import bgContato from "../../assets/bgContato.jpg";
import Title from "../../components/Title/title";

const Contato: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center mb-32">
      <Title color="#fff" backgroundImageUrl={bgContato} content="Contato" />
    </div>
  );
};

export default Contato;
