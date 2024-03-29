import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Location from './views/Location';
import "./App.sass";
import NotFound from './views/NotFound';

const App: React.FC = () => {
  return (
    <Router>
	    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id"  element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
