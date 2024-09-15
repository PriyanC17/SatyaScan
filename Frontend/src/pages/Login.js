import React, { useState } from 'react';
import app from '../axiosConfig';
import { User, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getValidToken } from '../tokenHelper';
import Navbar from '../components/Navbar';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkUserStatus = async () => {
    try {
      const token = await getValidToken();
      
      const response = await app.get('user-status/', {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data.isAuthenticated) {
        setMessage(`Welcome back, ${response.data.username}`);
      } else {
        setMessage('User is not authenticated');
      }
    } catch (error) {
      console.error('Error checking user status:', error);
      setMessage('Error checking user status');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      try {
        const response = await app.post('register/', {
          username: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setMessage(response.data.success);
        setIsSignUp(false); // Switch back to login after successful sign-up
      } catch (error) {
        setMessage(error.response?.data?.error || 'Sign-up failed');
      }
    } else {
      try {
        const response = await app.post('login/', {
          email: formData.email,
          password: formData.password,
        });
        
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        
        setMessage('Login successful!');
        await checkUserStatus(); // Check user status after successful login
        navigate('/'); // Redirect to home page
      } catch (error) {
        setMessage(error.response?.data?.error || 'Login failed');
      }
    }
  };
  


  return (
    <>
    <Navbar />

      <div className="min-h-screen p-5 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 font-roboto flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>

        {/* Login and Sign-Up Wrapper */}
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex justify-center transition-all duration-500 ease-in-out">
            {!isSignUp ? (
              <div className="w-full md:w-96 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg transition-opacity duration-500">
                {message && <p className="mb-4 text-center text-gray-200">{message}</p>}
                <h2 className="text-3xl font-bold mb-6 text-pink-500 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2" htmlFor="login-email">Email</label>
                    <div className="flex items-center bg-gray-800 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-500 transition-all">
                      <Mail className="text-gray-400 mr-3" />
                      <input
                        id="login-email"
                        type="email"
                        name="email"
                        className="bg-transparent w-full focus:outline-none text-gray-300 placeholder-gray-500"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2" htmlFor="login-password">Password</label>
                    <div className="flex items-center bg-gray-800 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-500 transition-all">
                      <Lock className="text-gray-400 mr-3" />
                      <input
                        id="login-password"
                        type="password"
                        name="password"
                        className="bg-transparent w-full focus:outline-none text-gray-300 placeholder-gray-500"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <button className="w-full py-3 bg-pink-500 rounded-lg hover:bg-pink-600 hover:shadow-lg transition-transform transform hover:scale-105 duration-300 text-white font-semibold">
                    Login
                  </button>
                </form>
                <p className="mt-6 text-gray-400 text-center">
                  Don't have an account?{' '}
                  <button
                    className="text-pink-500 hover:underline"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            ) : (
              <div className="w-full md:w-96 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg transition-opacity duration-500">
                {message && <p className="mb-4 text-center text-gray-200">{message}</p>}
                <h2 className="text-3xl font-bold mb-6 text-pink-500 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2" htmlFor="signup-name">Name</label>
                    <div className="flex items-center bg-gray-800 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-500 transition-all">
                      <User className="text-gray-400 mr-3" />
                      <input
                        id="signup-name"
                        type="text"
                        name="name"
                        className="bg-transparent w-full focus:outline-none text-gray-300 placeholder-gray-500"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2" htmlFor="signup-email">Email</label>
                    <div className="flex items-center bg-gray-800 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-500 transition-all">
                      <Mail className="text-gray-400 mr-3" />
                      <input
                        id="signup-email"
                        type="email"
                        name="email"
                        className="bg-transparent w-full focus:outline-none text-gray-300 placeholder-gray-500"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-400 mb-2" htmlFor="signup-password">Password</label>
                    <div className="flex items-center bg-gray-800 p-3 rounded-lg focus-within:ring-2 focus-within:ring-pink-500 transition-all">
                      <Lock className="text-gray-400 mr-3" />
                      <input
                        id="signup-password"
                        type="password"
                        name="password"
                        className="bg-transparent w-full focus:outline-none text-gray-300 placeholder-gray-500"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <button className="w-full py-3 bg-pink-500 rounded-lg hover:bg-pink-600 hover:shadow-lg transition-transform transform hover:scale-105 duration-300 text-white font-semibold">
                    Sign Up
                  </button>
                </form>
                <p className="mt-6 text-gray-400 text-center">
                  Already have an account?{' '}
                  <button
                    className="text-pink-500 hover:underline"
                    onClick={() => setIsSignUp(false)}
                  >
                    Login
                  </button>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Footer */}

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
};

export default Login;




