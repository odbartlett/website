import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Import your components
import App from './App.jsx';
import Project1 from './components/Roots/Project1';
import Project2 from './components/Roots/Project2';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Default route for the main app */}
        <Route path="/" element={<App />} />

        {/* Additional route for Project1 */}
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
      </Routes>
    </Router>
  </StrictMode>,
);