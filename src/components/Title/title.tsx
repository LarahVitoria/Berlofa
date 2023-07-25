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
      className="h-24 w-full my-14 flex items-center justify-center"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.37) 0%, rgba(0, 0, 0, 0.37) 100%), url(${backgroundImageUrl}), lightgray 50% / cover no-repeat `,
      }}
    >
      <h1
        style={{
          color: `${color}`,
        }}
        className="font-semibold text-5xl"
      >
        {content}
      </h1>
    </div>
  );
};

export default Title;
