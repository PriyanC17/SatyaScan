import React from 'react';
import { motion } from 'framer-motion';
import {  } from 'react-icons/fa';
import  { useState } from 'react';
import { Camera, Video, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeepLearn = () => {
  const [activeTab, setActiveTab] = useState('image');
  const navigate = useNavigate();

  const goToDetectPage = () => {
    navigate('/DeepLearn');
  };

  return (
    <>

<nav className="fixed top-0 left-0 w-screen z-50 bg-transparent text-white">
  <div className="container mx-auto flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/10 border-b border-white/20 rounded-lg">
    {/* Left side: Logo */}
    <div className="flex items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4AiZ2vu67jP70-IkkA24VgbxNJm5llUlpCvxJSbQfHTnNgUSAQpMb9-pOo4y1JOT6N1k&usqp=CAU"
        alt="Logo"
        className="w-12 h-12 rounded-full"
      />
      <span className="ml-3 text-2xl font-bold tracking-wide bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Satya-Scan</span>
    </div>

    {/* Right side: Navigation links and buttons */}
    <div className="flex items-center space-x-8">
      <button onClick={goToDetectPage} className="relative font-semibold py-2 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 shadow-lg transition-all duration-300">
        Generate Deep-Fakes
      </button>
      <a href="#about" className="relative font-semibold text-lg py-2 transition-colors duration-300 hover:text-pink-500">
        About Us
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
      </a>
      <a href="\Research" className="relative font-semibold text-lg py-2 transition-colors duration-300 hover:text-pink-500">
        Resources
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
      </a>
      <button className="relative font-semibold py-2 px-6 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300 shadow-lg">
        Sign Up
      </button>
    </div>
  </div>
</nav>






<div className="min-h-screen p-40 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 font-roboto">
      <div className="container mx-auto px-6 py-12">
        {/* Tabs Navigation */}
        <div className="flex justify-center space-x-6 mb-8">
          <button
            className={`flex items-center py-3 px-6 font-semibold text-lg transition-transform duration-300 ${
              activeTab === 'image'
                ? 'border-b-4 border-pink-500 text-pink-500 transform scale-105'
                : 'text-gray-400 hover:text-pink-500'
            }`}
            onClick={() => setActiveTab('image')}
          >
            <Camera className="mr-2" size={24} />
            Image
          </button>
          <button
            className={`flex items-center py-3 px-6 font-semibold text-lg transition-transform duration-300 ${
              activeTab === 'video'
                ? 'border-b-4 border-pink-500 text-pink-500 transform scale-105'
                : 'text-gray-400 hover:text-pink-500'
            }`}
            onClick={() => setActiveTab('video')}
          >
            <Video className="mr-2" size={24} />
            Video
          </button>
          <button
            className={`flex items-center py-3 px-6 font-semibold text-lg transition-transform duration-300 ${
              activeTab === 'audio'
                ? 'border-b-4 border-pink-500 text-pink-500 transform scale-105'
                : 'text-gray-400 hover:text-pink-500'
            }`}
            onClick={() => setActiveTab('audio')}
          >
            <Mic className="mr-2" size={24} />
            Audio
          </button>
        </div>

        {/* Input Container */}
        <div className="relative bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-2xl transition-all duration-500 transform  hover:shadow-4xl max-w-3xl mx-auto">
          {activeTab === 'image' && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gray-100 flex items-center">
                <Camera className="mr-3 text-pink-500" size={28} />
                Upload an Image
              </h2>
              <input
                type="file"
                accept="image/*"
                className="w-full p-4 border border-gray-500 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500"
              />
              <p className="mt-2 text-sm text-gray-400">Accepted formats: JPG, PNG, GIF</p>
            </div>
          )}
          {activeTab === 'video' && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gray-100 flex items-center">
                <Video className="mr-3 text-pink-500" size={28} />
                Upload a Video
              </h2>
              <input
                type="file"
                accept="video/*"
                className="w-full p-4 border border-gray-500 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500"
              />
              <p className="mt-2 text-sm text-gray-400">Accepted formats: MP4, AVI, MOV</p>
            </div>
          )}
          {activeTab === 'audio' && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 text-gray-100 flex items-center">
                <Mic className="mr-3 text-pink-500" size={28} />
                Upload an Audio File
              </h2>
              <input
                type="file"
                accept="audio/*"
                className="w-full p-4 border border-gray-500 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500"
              />
              <p className="mt-2 text-sm text-gray-400">Accepted formats: MP3, WAV, AAC</p>
            </div>
          )}
        </div>
      </div>
    </div>









    <footer className="bg-gradient-to-r from-black to-gray-800 text-white py-6">
  <div className="container mx-auto flex flex-col items-center justify-between px-6">
    {/* Footer Content */}
    <div className="flex flex-col items-center space-y-4">
      <p className="text-lg font-semibold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">© 2024 Satya-Scan. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="#privacy" className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-500 hover:to-gray-700 transition-colors duration-300">Privacy Policy</a>
        <a href="#terms" className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-500 hover:to-gray-700 transition-colors duration-300">Terms of Service</a>
        <a href="#contact" className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-500 hover:to-gray-700 transition-colors duration-300">Contact Us</a>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}



export default DeepLearn;