import * as React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement> & { color?: string }) => {
  const { color, ...rest } = props;
  return (
    <svg viewBox="0 0 1280 96" fill="none" {...rest}>
      <path d="M0 96H1280L0 0V96Z" fill="currentColor" />
    </svg>
  );
};

export default Logo;
