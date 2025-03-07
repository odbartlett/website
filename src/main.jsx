import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import your components
import App from './App.jsx';
import Project1 from './components/Roots/Project1';
import Project2 from './components/Roots/Project2';
import Project3 from './components/Roots/Project3';
import Project4 from './components/Roots/Project4';
import Project5 from './components/Roots/Project5';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Default route for the main app */}
        <Route path="/" element={<App />} />

        {/* Additional routes for Projects */}
        <Route path="/chess" element={<Project1 />} />
        <Route path="/image-manip" element={<Project2 />} />
        <Route path="/cache-sim" element={<Project3 />} />
        <Route path="/key-value" element={<Project4 />} />
        <Route path="/crypto-trading-bot" element={<Project5 />} />
      </Routes>
    </Router>
  </StrictMode>,
);
