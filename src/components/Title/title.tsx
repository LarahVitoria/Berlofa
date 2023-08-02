import React from "react";

interface TitleProps {
  backgroundImageUrl: string;
  content: string;
  color: string;
}

const Title: React.FC<TitleProps> = ({
  backgroundImageUrl,
  content,
  color,
}) => {
  return (
    <div
      className="h-16 md:h-24 title w-full my-7 md:my-14 flex items-center justify-center"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.37) 100%), url(${backgroundImageUrl}), lightgray 50%`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        style={{
          color: `${color}`,
        }}
        className="font-semibold text-2xl md:text-5xl uppercase"
      >
        {content}
      </h1>
    </div>
  );
};

export default Title;
