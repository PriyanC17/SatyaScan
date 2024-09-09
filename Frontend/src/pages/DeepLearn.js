import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LoadingBar from './LoadingBar';

// Tab Component for Image, Video, and Audio
const TabButton = ({ isActive, onClick, icon: Icon, label }) => (
  <button
    className={`flex items-center py-3 px-6 font-semibold text-lg transition-transform duration-300 ${
      isActive ? 'border-b-4 border-pink-500 text-pink-500 transform scale-105' : 'text-gray-400 hover:text-pink-500'
    }`}
    onClick={onClick}
  >
    <Icon className="mr-2" size={24} />
    {label}
  </button>
);

// Upload Input Component
const UploadInput = ({ activeTab }) => {
  const acceptedFormats = {
    image: 'JPG, PNG, GIF',
    video: 'MP4, AVI, MOV',
    audio: 'MP3, WAV, AAC',
  };
  const icons = {
    image: Camera,
    video: Video,
    audio: Mic,
  };
  const Icon = icons[activeTab];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-gray-100 flex items-center">
        <Icon className="mr-3 text-pink-500" size={28} />
        Upload a {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
      </h2>
      <input
        type="file"
        accept={`${activeTab}/*`}
        className="w-full p-4 border border-gray-500 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500"
      />
      <p className="mt-2 text-sm text-gray-400">Accepted formats: {acceptedFormats[activeTab]}</p>
    </div>
  );
};

const DeepLearn = () => {
  const [activeTab, setActiveTab] = useState('image');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = () => {
    setIsLoading(true); // Start the loading bar
  };

  useEffect(() => {
    if (progress < 85) {
      const timer = setTimeout(() => setProgress(progress + 1), 50);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-screen z-50 bg-transparent text-white">
        {/* Navbar content */}
        <div className="container mx-auto flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/10 border-b border-white/20 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4AiZ2vu67jP70-IkkA24VgbxNJm5llUlpCvxJSbQfHTnNgUSAQpMb9-pOo4y1JOT6N1k&usqp=CAU"
              alt="Logo"
              className="w-12 h-12 rounded-full"
            />
            <span className="ml-3 text-2xl font-bold tracking-wide bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Satya-Scan
            </span>
          </div>

          {/* Right side: Navigation links and buttons */}
          <div className="flex items-center space-x-8">
            <button onClick={() => navigate('/DeepLearn')} className="relative font-semibold py-2 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 shadow-lg transition-all duration-300">
              Generate Deep-Fakes
            </button>
            <a href="#about" className="relative font-semibold text-lg py-2 transition-colors duration-300 hover:text-pink-500">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
            </a>
            <a href="/Research" className="relative font-semibold text-lg py-2 transition-colors duration-300 hover:text-pink-500">
              Resources
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
            </a>
            <button onClick={() => navigate('/Login')} className="relative font-semibold py-2 px-6 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300 shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="min-h-screen p-40 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 font-roboto">
        <div className="container mx-auto px-6 py-12">
          {/* Tabs Navigation */}
          <div className="flex justify-center space-x-6 mb-8">
            {['image', 'video', 'audio'].map((tab) => (
              <TabButton
                key={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                icon={{ image: Camera, video: Video, audio: Mic }[tab]}
                label={tab.charAt(0).toUpperCase() + tab.slice(1)}
              />
            ))}
          </div>

          {/* Input Container */}
          <div className="relative bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-2xl transition-all duration-500 transform hover:shadow-4xl max-w-3xl mx-auto">
            <UploadInput activeTab={activeTab} />
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handleSubmit}
                className="font-semibold py-2 px-6 rounded-lg border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300 shadow-lg"
              >
                Submit
              </button>
              <LoadingBar isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeepLearn;
