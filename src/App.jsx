// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './css/transform.css'; // Import the CSS file

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shyam-portfolio/" element={<LandingPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

