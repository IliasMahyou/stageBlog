import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import LandingPage from './pages/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
import { gsap } from 'gsap';

const App: React.FC = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (starsContainerRef.current) {
      const stars = starsContainerRef.current.querySelectorAll('.star');

      stars.forEach((star) => {
        // Set initial random positions
        gsap.set(star, {
          x: () => Math.random() * window.innerWidth - window.innerWidth / 2,
          y: () => Math.random() * window.innerHeight - window.innerHeight / 2,
        });

        // Animate each star to float
        gsap.to(star, {
          x: () => Math.random() * window.innerWidth - window.innerWidth / 2,
          y: () => Math.random() * window.innerHeight - window.innerHeight / 2,
          duration: () => Math.random() * 10 + 5, // Random duration between 5s and 15s
          repeat: -1, // Infinite animation
          yoyo: true, // Move back and forth
          ease: 'power1.inOut',
        });
      });
    }
  }, []);

  return (
    <Router>
      {/* Starry background */}
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Stars container */}
        <div ref={starsContainerRef} className="absolute inset-0 z-0">
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="star bg-white rounded-full absolute"
              style={{
                width: `${Math.random() * 3 + 2}px`, // Random size
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`, // Random position
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.5, // Initial opacity
              }}
            ></div>
          ))}
        </div>

        {/* App content */}
        <div className="relative z-10">
          <nav className="bg-gray-800 shadow text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">My Portfolio</h1>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="text-blue-300 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-blue-300 hover:underline">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-blue-300 hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container mx-auto p-6">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
