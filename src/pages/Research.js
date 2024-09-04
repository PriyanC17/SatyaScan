import React from 'react';
import { motion } from 'framer-motion';
import {  } from 'react-icons/fa';
import { Newspaper, BookOpen, Video,FileText, Link as LinkIcon } from 'lucide-react';


const Research = () => {
  return (
    <>


<nav className="fixed top-0 left-0 w-screen z-50 bg-transparent text-white">
  <div className="container mx-auto flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/10 border-b border-white/20 rounded-lg">
    {/* Left side: Logo */}
    <div className="flex items-center">
      <img
        src="https://via.placeholder.com/50x50?text=Logo"
        alt="Logo"
        className="w-12 h-12 rounded-full"
      />
      <span className="ml-3 text-2xl font-bold tracking-wide bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Satya-Scan</span>
    </div>

    {/* Right side: Navigation links and buttons */}
    <div className="flex items-center space-x-8">
      <button className="relative font-semibold py-2 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 shadow-lg transition-all duration-300">
        Generate Deep-Fakes
      </button>
      <a href="#about" className="relative font-semibold text-lg py-2 transition-colors duration-300 hover:text-pink-500">
        About Us
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
      </a>
      <a href="#resources" className="relative font-semibold text-lg py-2 transition-colors duration-300 hover:text-pink-500">
        Resources
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
      </a>
      <button className="relative font-semibold py-2 px-6 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300 shadow-lg">
        Sign Up
      </button>
    </div>
  </div>
</nav>






<div className="min-h-screen p-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 font-roboto">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-500">Deepfake Resources</h1>
          <p className="mt-4 text-gray-400">
            Explore a variety of resources to learn, research, and stay updated on deepfake technology.
          </p>
        </div>

        {/* Latest News Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Newspaper className="text-pink-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Latest News on Deepfakes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake Scandal"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Deepfake Scandal Rocks Politics</h3>
              <p className="text-gray-400">
                A recent deepfake video has caused turmoil in the political landscape, raising concerns about the authenticity of digital media.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Read more</a>
            </div>
            {/* News Item 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Celebrity Deepfake"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Celebrity Impersonation Deepfake</h3>
              <p className="text-gray-400">
                A deepfake video featuring a popular celebrity has gone viral, leading to debates about privacy and digital rights.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Read more</a>
            </div>
            {/* News Item 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake in Social Media"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Deepfakes and Social Media Misinformation</h3>
              <p className="text-gray-400">
                How deepfakes are being used to spread misinformation on social media platforms, and what can be done to combat it.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Read more</a>
            </div>
          </div>
        </section>

        {/* Learning Resources Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="text-pink-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Learn About Deepfakes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Learning Resource 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake Technology"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Understanding Deepfake Technology</h3>
              <p className="text-gray-400">
                This comprehensive guide walks you through the basics of deepfake technology and its implications.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Start learning</a>
            </div>
            {/* Learning Resource 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake Ethics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Ethical Implications of Deepfakes</h3>
              <p className="text-gray-400">
                Explore the ethical concerns surrounding deepfakes, including privacy, consent, and the potential for misuse.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Start learning</a>
            </div>
            {/* Learning Resource 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake Creation Tools"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Tools for Creating and Detecting Deepfakes</h3>
              <p className="text-gray-400">
                A practical guide to the tools available for creating and detecting deepfakes, for both beginners and experts.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Start learning</a>
            </div>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <FileText className="text-pink-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Research Papers on Deepfakes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Paper 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake Detection"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Advancements in Deepfake Detection</h3>
              <p className="text-gray-400">
                This paper explores the latest methods and technologies used to detect deepfakes with high accuracy.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Read paper</a>
            </div>
            {/* Research Paper 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake Forensics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Deepfake Forensics: Techniques and Challenges</h3>
              <p className="text-gray-400">
                An in-depth look at forensic techniques used to identify and analyze deepfakes in various media formats.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Read paper</a>
            </div>
            {/* Research Paper 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Legal Implications of Deepfakes"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Legal Implications of Deepfake Technology</h3>
              <p className="text-gray-400">
                This paper discusses the legal challenges posed by deepfakes and the evolving regulatory landscape.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Read paper</a>
            </div>
          </div>
        </section>

        {/* Additional Section: Deepfake Tutorials */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Video className="text-pink-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Deepfake Tutorials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tutorial 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake Tutorial"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Creating Deepfakes: A Step-by-Step Guide</h3>
              <p className="text-gray-400">
                Learn how to create deepfakes using popular tools with this detailed tutorial, perfect for beginners.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Watch tutorial</a>
            </div>
            {/* Tutorial 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake Detection Tutorial"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Detecting Deepfakes: Tools and Techniques</h3>
              <p className="text-gray-400">
                This tutorial covers various tools and techniques for detecting deepfakes, ideal for researchers and enthusiasts.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Watch tutorial</a>
            </div>
            {/* Tutorial 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Deepfake Ethics Tutorial"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Ethical Considerations in Deepfake Creation</h3>
              <p className="text-gray-400">
                A tutorial that delves into the ethical implications of creating deepfakes, with guidelines and best practices.
              </p>
              <a href="#" className="text-pink-500 mt-4 inline-block">Watch tutorial</a>
            </div>
          </div>
        </section>
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

export default Research;