import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen to-black text-gray-100 transparant">
      <div className="container mx-auto py-16 px-6 space-y-12">
        {/* Intro Section */}
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-400">
            Discover my projects and read about my journey in software development.
          </p>
        </header>

        {/* Quick Links Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <Link
            to="/portfolio"
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg text-lg shadow hover:shadow-lg transition"
          >
            View Portfolio
          </Link>
          <Link
            to="/blog"
            className="bg-gray-700 hover:bg-gray-800 text-white py-4 px-8 rounded-lg text-lg shadow hover:shadow-lg transition"
          >
            Read Blog
          </Link>
        </div>

        {/* Additional Information */}
        <div className="text-center text-gray-400">
          <p>
            Interested in collaborating or learning more about me?{' '}
            <Link
              to="/contact"
              className="text-blue-400 hover:underline"
            >
              Contact me
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
