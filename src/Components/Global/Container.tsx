import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "" , children}) => {
  return <div className={`${className} px-32 py-12`}>
    {children}
  </div>;
};

export default Container;
