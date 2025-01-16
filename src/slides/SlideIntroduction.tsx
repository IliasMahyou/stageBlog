import React, { useEffect } from "react";
import { gsap } from "gsap";

const topics = [
  "Toelichting van de uitgevoerde taken",
  "Persoonlijke groei",
  "Reflectie technische problemen",
  "Voorstelling van de applicaties",
  "Question & Answer",
];

const Inleiding: React.FC = () => {
  useEffect(() => {

    gsap.fromTo(
      ".topic-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" }
    );


    gsap.fromTo(
      ".inleiding-title",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="h-screen w-screen relative flex items-center justify-center">
 
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://www.mediahuis.be/app/uploads/2021/04/Het-Nieuwsblad-02-OT-filter-2-1024x490.jpg')",
          filter: "blur(1.5px)",
        }}
      ></div>

    
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

     


      
      <div className="max-w-4xl text-center z-10">
        <h1 className="inleiding-title text-7xl font-extrabold text-white mb-12 tracking-wider">
          Inleiding
        </h1>

        
        <div className="space-y-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="topic-item text-4xl font-bold text-white relative group transition-all"
            >
              {topic}
            </div>
          ))}
              <img 
  src="https://i.ibb.co/cyFG3y0/Mediahuis-logo-transparent-2.png" 
  alt="Mediahuis Logo" 
  height={100} 
  width={300} 
  className="absolute bottom-0 left-6"
/>
        </div>
      </div>
    </div>
  );
};

export default Inleiding;
