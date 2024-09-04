import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import LandingApp from './pages/Landing';
import DeepLearn from './pages/DeepLearn';
import Research from './pages/Research';

function App() {
  return (
    <Router>
      <AnimatePresence>
      <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/deepLearn' element={<DeepLearn />} />
          <Route path='/research' element={<Research />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;