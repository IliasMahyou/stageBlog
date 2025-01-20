import React, { useRef } from "react";
import { gsap } from "gsap";

interface HoverButtonProps {
  href: string;
  children: React.ReactNode;
}

const HoverButton: React.FC<HoverButtonProps> = ({ href, children }) => {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, { scale: 1.2, duration: 0.3, ease: "power1.out" });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: "power1.out" });
    }
  };

  return (
    <div
      className="relative w-40 h-40 flex items-center justify-center"
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-full"
      >
        {children}
      </a>
    </div>
  );
};

export default HoverButton;
