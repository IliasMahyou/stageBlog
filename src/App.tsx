import React  from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import BlogPage from './pages/BlogPage';



const App: React.FC = () => {
 


  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Internship Blog</h1>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-blue-500 hover:underline">Blog Page</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<BlogPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
