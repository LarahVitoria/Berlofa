import React from "react";
interface DividerProps {
  show: boolean;
  wide: boolean;
}
const Divider: React.FC<DividerProps> = ({ show, wide }) => {
  return (
    <hr
      className={`my-4 ${wide ? "w-full" : ""}  ${
        show ? "divide-[#f5b502]" : ""
      }`}
    />
  );
};

export default Divider;
