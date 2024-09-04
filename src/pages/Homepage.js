import React from 'react';
import { motion } from 'framer-motion';
import { } from 'react-icons/fa';
import {  } from 'lucide-react';
import Header from '../components/Header';

  const HomePage = () => {
    return (
      <>
      <Header />
 
        {/* Main Content */}
        <main className="container mx-auto mt-16 p-4">
      
          {/* Research Areas Section */}
          <section className="mt-24"> </section>

          {/* Achievements Section */}
          <section className="mt-24 bg-teal-100 rounded-lg p-12"> </section>

        </main>

      {/* Contact Section */}
      <section className="bg-teal-700 text-white py-16 mt-16"> </section>

      {/* Newsletter Signup */}
      <section className="bg-yellow-100 py-12"> </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-12"> </footer>
    </>
  );
};

export default HomePage;