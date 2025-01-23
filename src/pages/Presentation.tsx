import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import SlideIntroduction from "../slides/SlideIntroduction";
import SlideProjects from "../slides/SlideProjects";
import SlideTechnologies from "../slides/SlideTechnologies";
import SlideLessons from "../slides/SlideLessons";
import SlideThankYou from "../slides/SlideThankYou";
import NavigationDots from "../components/NavigationDots";
import SlideIntro from "../slides/SlideIntro";
import SlideQuestionsAndAnswers from "../slides/SlideQuestionAnswer";

const Presentation: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolling, setScrolling] = useState(false); // prevent rapid scrolling

  const slides = [
    <SlideIntro key="actualIntro" />,
    <SlideIntroduction key="companyIntro" />,
    <SlideProjects key="projects" />,
    <SlideTechnologies key="tech" />,
    <SlideLessons key="lessons" />,
    <SlideQuestionsAndAnswers key="questionAndAnswer"/>,
    <SlideThankYou key="thank-you" />

  ];

  const handleSlideChange = (newSlide: number) => {
    setActiveSlide(newSlide);

    gsap.to(".background-layer", {
      x: `-${newSlide * 50}vw`, 
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(".foreground-layer", {
      x: `-${newSlide * 100}vw`, 
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleScroll = (event: WheelEvent) => {
    if (scrolling) return; 

    setScrolling(true);

 
    if (event.deltaY > 0) {
      const nextSlide = (activeSlide + 1) % slides.length;
      handleSlideChange(nextSlide);
    } else if (event.deltaY < 0) {
      const prevSlide = (activeSlide - 1 + slides.length) % slides.length;
      handleSlideChange(prevSlide);
    }

 
    setTimeout(() => setScrolling(false), 800); 
  };

  useEffect(() => {
 
    window.addEventListener("wheel", handleScroll);

   
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeSlide, scrolling]); 

  return (
    <div className="relative overflow-hidden h-screen w-screen">
    
      <div
        className="background-layer absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-transform"
        style={{
          transform: `translateX(-${activeSlide * 50}vw)`,
        }}
      ></div>

 
      <div
        className="foreground-layer flex h-screen transition-transform duration-700 relative"
        style={{
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${activeSlide * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen h-screen flex items-center justify-center bg-white shadow-lg">
            {slide}
          </div>
        ))}
      </div>


      <NavigationDots
        slides={slides.length}
        activeSlide={activeSlide}
        onDotClick={handleSlideChange}
      />
    </div>
  );
};

export default Presentation;
