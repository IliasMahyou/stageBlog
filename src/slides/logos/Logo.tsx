import React from "react";

const Logo: React.FC<{ className?: string, logoURL?:string,alt?:string }> = ({ className,logoURL,alt }) => {
  return (
    <img
      src={logoURL}
      alt={alt}
      className={className}
    />
  );
};

export default Logo;
