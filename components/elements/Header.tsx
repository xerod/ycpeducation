import React, { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <h1 className={`text-5xl font-bold leading-none ${className}`}>
      <mark
        className="text-yellow-900"
        style={{
          background:
            "linear-gradient(180deg,rgba(255,255,255,0) 50%, #FDE68A 50%)",
        }}
      >
        {children}
      </mark>
    </h1>
  );
};

export default Header;
