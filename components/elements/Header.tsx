import React, { ReactNode } from "react";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { children, className } = props;

  return (
    <h1
      className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-none ${className}`}
    >
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
