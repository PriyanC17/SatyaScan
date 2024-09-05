import React from 'react';
import { motion } from 'framer-motion';
import {  } from 'react-icons/fa';
import { Newspaper, BookOpen, Video,FileText, Link as LinkIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';


const Research = () => {
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






<div className="min-h-screen p-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 font-roboto">
      <div className="container mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-500">Unlock diverse collection of deepfake resources</h1>
          <p className="mt-4 text-gray-400">
          Delve into a wealth of resources to expand your knowledge, conduct research, and stay at the forefront of deepfake technology advancements to enhance your understanding and keep pace with the latest innovations in the field.
          </p>
        </div>

        {/* Latest News Section */}
        <section className="mb-12">
        <div className="flex items-center mb-6 justify-between">
          <div className="flex items-center">
            <Newspaper className="text-pink-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Latest News on Deepfakes</h2>
          </div>
          <a href="#" className="text-pink-500 font-bold flex items-center space-x-2 hover:underline">
            <span>Explore More</span>
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
                <img
                  src="https://assets2.cbsnewsstatic.com/hub/i/r/2024/01/09/772c2398-3dc5-4d12-ae45-4616fa9d270a/thumbnail/1280x720/1006c0031d582a067bed6ed69328105b/gettyimages-1917155445.jpg?v=631cf5f2b4e8db7f9bc428589402864d"
                  alt="Deepfake Scandal"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Glamourous Deepfake Scandal</h3>
              <p className="text-gray-400">
                X blocks searches for "Taylor Swift" after explicit deepfakes go viral
              </p>
              <a href="https://www.cbsnews.com/news/taylor-swift-deepfakes-x-search-block-twitter/" className="text-pink-500 mt-4 inline-block">Read more</a>
            </div>
            {/* News Item 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://c.ndtvimg.com/2024-04/a945hc54_elon-musk_625x300_24_April_24.jpeg?im=FaceCrop,algorithm=dnn,width=650,height=400"
                alt="Celebrity Deepfake"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Popularity Scam</h3>
              <p className="text-gray-400">
                Elon Musk Faces Criticism Over Deepfake Kamala Harris Video
              </p>
              <a href="https://www.ndtv.com/world-news/elon-musk-faces-criticism-over-deepfake-kamala-harris-video-6218487" className="text-pink-500 mt-4 inline-block">Read more</a>
            </div>
            {/* News Item 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-12/19/full/1639928907-7431.jpg"
                alt="Deepfake in Social Media"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Deepfakes and Social Media Misinformation</h3>
              <p className="text-gray-400">
                Gov. demands Social Media Platforms To Weed Out Misinformation and Deepfakes.
              </p>
              <a href="https://www.outlookbusiness.com/news/indian-government-takes-action-demands-social-media-platforms-to-weed-out-misinformation-and-deepfakes" className="text-pink-500 mt-4 inline-block">Read more</a>
            </div>
          </div>
        </section>

        {/* Learning Resources Section */}
        <section className="mb-12">
        <div className="flex items-center mb-6 justify-between">
          <div className="flex items-center">
            <BookOpen className="text-pink-500 mr-3" size={28} />
            <h2 className="text-3xl font-bold">Learn About Deepfakes</h2>
          </div>
          <a href="#" className="text-pink-500 font-bold flex items-center space-x-2 hover:underline">
            <span>Explore More</span>
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Learning Resource 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="data:image/jpeg;base64,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"
                alt="Deepfake Technology"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Understanding Deepfake Technology</h3>
              <p className="text-gray-400">
                This comprehensive guide walks you through the basics of deepfake technology and its implications.
              </p>
              <a href="https://www.youtube.com/watch?v=llVoaZXtvEo&pp=ygUhVW5kZXJzdGFuZGluZyBEZWVwZmFrZSBUZWNobm9sb2d5" className="text-pink-500 mt-4 inline-block">Start learning</a>
            </div>
            {/* Learning Resource 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://th.bing.com/th/id/OIG4.bZnjYgVgXxFTqWWRwKh1?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
                alt="Deepfake Ethics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Ethical Implications of Deepfakes</h3>
              <p className="text-gray-400">
                Explore the ethical concerns surrounding deepfakes, including privacy, consent, and the potential for misuse.
              </p>
              <a href="https://www.youtube.com/watch?v=L0yui2pQkE8&pp=ygUhRXRoaWNhbCBJbXBsaWNhdGlvbnMgb2YgRGVlcGZha2Vz" className="text-pink-500 mt-4 inline-block">Start learning</a>
            </div>
            {/* Learning Resource 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://cdn.arstechnica.net/wp-content/uploads/2019/12/deepfake-training-1.jpg"
                alt="Deepfake Creation Tools"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Tools for Creating and Detecting Deepfakes</h3>
              <p className="text-gray-400">
                A practical guide to the tools available for creating and detecting deepfakes, for both beginners and experts.
              </p>
              <a href="https://www.youtube.com/watch?v=O-Eh2r2_nZU&pp=ygUdVG9vbHMgZm9yIENyZWF0aW5nICBEZWVwZmFrZXM%3D" className="text-pink-500 mt-4 inline-block">Start learning</a>
            </div>
          </div>
        </section>

        {/* Research Papers Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6 justify-between">
            <div className="flex items-center">
              <FileText className="text-pink-500 mr-3" size={28} />
              <h2 className="text-3xl font-bold">Research Papers on Deepfakes</h2>
            </div>
            <a href="#" className="text-pink-500 font-bold flex items-center space-x-2 hover:underline">
              <span>Explore More</span>
              <ChevronRightIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Research Paper 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mJSyW7myphOEj5attyN3qW7gPhSWOJBKfg&s"
                alt="Deepfake Detection"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Advancements in Deepfake Detection</h3>
              <p className="text-gray-400">
                Evolving from Single-modal to Multi-modal Facial Deepfake Detection.
              </p>
              <a href="https://arxiv.org/pdf/2406.06965v3" className="text-pink-500 mt-4 inline-block">Read paper</a>
            </div>
            {/* Research Paper 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFz9_XVBe4MlvGsOpjCqLDRFEyj7-2uISwYPQ23c6LL0f-dOS6sL45NyOYEmnwhdbAOws&usqp=CAU"
                alt="Deepfake Forensics"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Deepfake Forensics: Techniques and Challenges</h3>
              <p className="text-gray-400">
                An in-depth look at forensic techniques used to identify and analyze deepfakes in various media formats.
              </p>
              <a href="https://arxiv.org/pdf/1901.08971v3" className="text-pink-500 mt-4 inline-block">Read paper</a>
            </div>
            {/* Research Paper 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdyhHOCwmgcgW8aYPNPxR1w7wz2NfRXldDQQ&s"
                alt="Legal Implications of Deepfakes"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">WaveFake</h3>
              <p className="text-gray-400">
                This paper discusses the Audio Deepfake Detection.
              </p>
              <a href="https://arxiv.org/pdf/2111.02813v1" className="text-pink-500 mt-4 inline-block">Read paper</a>
            </div>
          </div>
        </section>

        {/* Additional Section: Deepfake Tutorials */}
        <section className="mb-12">
          <div className="flex items-center mb-6 justify-between">
            <div className="flex items-center">
              <Video className="text-pink-500 mr-3" size={28} />
              <h2 className="text-3xl font-bold">Deepfake Tutorials</h2>
            </div>
            <a href="#" className="text-pink-500 font-bold flex items-center space-x-2 hover:underline">
              <span>Explore More</span>
              <ChevronRightIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tutorial 1 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://th.bing.com/th/id/OIG4.XUegt7FDYxWVyBIcMiSC?w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
                alt="Deepfake Tutorial"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Creating Deepfakes: A Step-by-Step Guide</h3>
              <p className="text-gray-400">
                Learn how to create deepfakes using popular tools with this detailed tutorial, perfect for beginners.
              </p>
              <a href="https://www.youtube.com/watch?v=e4mJoB7fN8Q&pp=ygUoQ3JlYXRpbmcgRGVlcGZha2VzOiBBIFN0ZXAtYnktU3RlcCBHdWlkZQ%3D%3D" className="text-pink-500 mt-4 inline-block">Watch tutorial</a>
            </div>
            {/* Tutorial 2 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://backend.vlinkinfo.com/uploads/What_is_a_Deepfake_Detection_Tool_2ae902b16e.jpg"
                alt="Deepfake Detection Tutorial"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Detecting Deepfakes: Tools and Techniques</h3>
              <p className="text-gray-400">
                This tutorial covers various tools and techniques for detecting deepfakes, ideal for researchers and enthusiasts.
              </p>
              <a href="https://www.youtube.com/watch?v=_q16aJTXVRE&list=PLgi1pDxQBCovetWjJIL1H_IC7SY13TIyr" className="text-pink-500 mt-4 inline-block">Watch tutorial</a>
            </div>
            {/* Tutorial 3 */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/0*p981Do1b4Xhv_Cr7.jpg"
                alt="Deepfake Ethics Tutorial"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-100 mb-2">Ethical Considerations in Deepfake Creation</h3>
              <p className="text-gray-400">
                A tutorial that delves into the ethical implications of creating deepfakes, with guidelines and best practices.
              </p>
              <a href="https://www.youtube.com/watch?v=BuO86IM3ngQ&pp=ygUrRXRoaWNhbCBDb25zaWRlcmF0aW9ucyBpbiBEZWVwZmFrZSBDcmVhdGlvbg%3D%3D" className="text-pink-500 mt-4 inline-block">Watch tutorial</a>
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