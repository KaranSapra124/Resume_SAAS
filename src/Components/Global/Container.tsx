import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "" , children}) => {
  return <div className={`${className} px-20 py-10`}>
    {children}
  </div>;
};

export default Container;
