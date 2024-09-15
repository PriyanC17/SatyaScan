import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import DeepLearn from './pages/DeepLearn';
import Research from './pages/Research';
import HomePage from './pages/HomePage';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <AnimatePresence>
      <Header />
        <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/Login' element={<Login />} />

          <Route path='/deepLearn' element={<DeepLearn />} />
          <Route path='/research' element={<Research />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;