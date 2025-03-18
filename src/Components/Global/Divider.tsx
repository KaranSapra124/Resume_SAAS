import React from "react";
interface DividerProps {
  className: string;
}
const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  return <div className={className}></div>;
};

export default Divider;
