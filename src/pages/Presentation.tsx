import React, { useState } from "react";
import SlideIntroduction from "../slides/SlideIntroduction";
import SlideProjects from "../slides/SlideProjects";
import SlideTechnologies from "../slides/SlideTechnologies";
import SlideLessons from "../slides/SlideLessons";
import SlideThankYou from "../slides/SlideThankYou";
import NavigationDots from "../components/NavigationDots";
import SlideIntro from "../slides/SlideIntro";

const Presentation: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    <SlideIntro key="actualIntro" />,
    <SlideIntroduction key="companyIntro" />,
    <SlideProjects key="projects" />,
    <SlideTechnologies key="tech" />,
    <SlideLessons key="lessons" />,
    <SlideThankYou key="thank-you" />,
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex h-screen transition-transform duration-700"
        style={{
          width: `${slides.length * 100}vw`, // Adjust total width dynamically
          transform: `translateX(-${activeSlide * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen h-screen">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <NavigationDots
        slides={slides.length}
        activeSlide={activeSlide}
        onDotClick={setActiveSlide}
      />
    </div>
  );
};

export default Presentation;
