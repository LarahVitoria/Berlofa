import React from "react";

interface TitleProps {
  backgroundImageUrl: string;
  content: string;
}

const Title: React.FC<TitleProps> = ({ backgroundImageUrl, content }) => {
  return (
    <div
      className="bg-no-repeat bg-cover h-32 w-full my-14 flex items-center justify-center"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.37) 100%), url(${backgroundImageUrl}), lightgray 50% / cover no-repeat`,
      }}
    >
      <h1 className="text-[#F5B502] font-Poppins font-semibold text-7xl">
        {content}
      </h1>
    </div>
  );
};

export default Title;
