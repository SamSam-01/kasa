import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Location from './views/Location';
import "./App.sass";
import NotFound from './views/NotFound';
import About from './views/About';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location/:id"  element={<Location />} />
          <Route path='/about' element={<About />} />
          <Route path='/kasa' element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
