import React from "react";

interface NavigationDotsProps {
  slides: number;
  activeSlide: number;
  onDotClick: (index: number) => void;
}

const NavigationDots: React.FC<NavigationDotsProps> = ({
  slides,
  activeSlide,
  onDotClick,
}) => {
  return (
    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      {Array.from({ length: slides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-4 h-4 rounded-full ${
            index === activeSlide ? "bg-white scale-125" : "bg-gray-300"
          } transition-all duration-300`}
        ></button>
      ))}
    </div>
  );
};

export default NavigationDots;
