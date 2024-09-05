import React from 'react';
import { useNavigate } from 'react-router-dom';
import Chatbot from './Chatbot'; 



function HomePage() {
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
      <a href="\HomePage" className="relative font-semibold text-lg py-2 transition-colors duration-300 hover:text-pink-500">
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






      <div className="min-h-screen bg-gray-50 text-gray-900 font-roboto">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-cyan-500 text-white py-48 overflow-hidden">
          <img
            src="https://deepfakedetector.ai/img/deepfake%20detector.png"
            alt="Deepfake Detection"
            className="absolute inset-0 object-cover w-full h-full opacity-40"
          />
          <div className="container mx-auto relative z-10 text-center px-4">
            <h1 className="text-7xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-fade-in-down">
              Detect Deepfakes Instantly with Cutting-Edge AI
            </h1>
            <p className="text-2xl mb-8 max-w-2xl mx-auto bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
              Protect your content and identity with our advanced deepfake detection platform. Spot manipulated media and ensure authenticity.
            </p>
            <button onClick={goToDetectPage}  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-5 px-8 rounded-full shadow-lg transform transition duration-400 ease-in-out hover:scale-105 hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-opacity-50">
              Start Detecting Now
            </button>
          </div>
        </section>

        {/* About Deepfake Detection */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-600 to-blue-400 bg-clip-text text-transparent">
              Understanding the Threat of Deepfakes
            </h2>
            <p className="text-center text-lg mb-10 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Deepfakes are AI-generated videos, images, or audio that falsify reality, posing significant risks in misinformation, identity theft, and financial fraud. Our AI-powered solution helps to identify these manipulations quickly and accurately.
            </p>
          </div>
        </section>

        {/* Detection Insights Section */}
        <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-700 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-600 to-blue-400 bg-clip-text text-transparent">
              Deepfake Detection Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <img
                  src="https://deepfakedetector.ai/img/aivoicedetector.png"
                  alt="Graph showing deepfake data"
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="text-gray-300">
                  Statistical analysis of deepfake content and its growing impact on media and public trust.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <img
                  src="https://deepfakedetector.ai/img/deepfake%20detector.png"
                  alt="Graph showing detection accuracy"
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="text-gray-300">
                  Our AI detection accuracy is continuously evolving, surpassing industry standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real Cases of Deepfake Fraud */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-red-700 to-red-400 bg-clip-text text-transparent">
              Real Cases of Deepfake Fraud
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <a href='https://moneyweek.com/personal-finance/celebrity-ad-scams'>
                  <img
                    src="https://cdn.mos.cms.futurecdn.net/cFHAn9E6n65LsUGu4aQZZT-1600-80.jpg.webp"
                    alt="News 1"
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                </a>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
                  Celebrity Impersonation Scandal
                </h3>
                <p className="text-gray-300">
                  Millions lost in celebrity ad scams impersonating Elon Musk, Taylor Swift and others.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <a href="https://www.technologyreview.com/2020/02/19/868173/an-indian-politician-is-using-deepfakes-to-try-and-win-voters/">
                  <img
                    src="https://duet-cdn.vox-cdn.com/thumbor/0x0:1056x643/828x552/filters:focal(498x312:499x313):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19728097/indian_politician.jpg"
                    alt="News 2"
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                </a>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-600 to-cyan-400 bg-clip-text text-transparent">
                  Political Deepfake Creates Chaos
                </h3>
                <p className="text-gray-300">
                  An Indian politician - president of India’s ruling Bharatiya Janata Party (BJP), Manoj Tiwari, is using deepfake technology to win new voters.
                </p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <a href="https://www.forbes.com/sites/jessedamiani/2019/09/03/a-voice-deepfake-was-used-to-scam-a-ceo-out-of-243000/">
                  <img
                    src="https://strapi.abhandshake.com/uploads/BLOG_1200x628_10_1_78287768cd.jpg"
                    alt="News 3"
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                </a>
                
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-red-400 bg-clip-text text-transparent">
                  Financial Fraud with AI-Generated Voices
                </h3>
                <p className="text-gray-300">
                  A Voice Deepfake Was Used To Scam A CEO Out Of $243,000.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New Section: Happy Clients, Team Size, Detections */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent">
               Major Breakthrough
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  RNNs and LSTM
                </h3>
                <p>Advanced Temporal Anomaly Detection</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-indigo-500 bg-clip-text text-transparent">
                  ResNeXt CNN
                </h3>
                <p>High-Precision Feature Extraction</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Immutable Records
                </h3>
                <p>Blockchain-Backed Authenticity Verification</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Steps */}
        <section className="py-20 bg-gradient-to-r from-white to-gray-50 text-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-green-400 bg-clip-text text-transparent">
              How Our Detection Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Step 1: Upload
                </h3>
                <p className="text-gray-700">
                  Upload your media for analysis, including videos, images, or audio files.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Step 2: Analyze
                </h3>
                <p className="text-gray-700">
                  Our AI algorithms scan the media for signs of manipulation and deepfake patterns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                  Step 3: Report
                </h3>
                <p className="text-gray-700">
                  Receive a comprehensive report outlining the authenticity of your media and any detected manipulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent">
              Join Our Early Access Program
            </h2>
            <p className="mb-8 text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sign up today to get access to our advanced deepfake detection tools and safeguard your media.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold py-3 px-6 rounded-full hover:from-pink-500 hover:to-yellow-400 transition duration-300 shadow-lg transform hover:scale-105">
              Sign Up Now
            </button>
          </div>
        </section>
      </div>

      <Chatbot />
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

export default HomePage;