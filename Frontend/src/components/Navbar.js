import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import app from '../axiosConfig';
import { logout, getValidToken } from '../tokenHelper';

const Navbar = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    const goToDetectPage = () => navigate('/DeepLearn');
    const goToLogin = () => navigate('/Login');
    const handleLogout = () => {
        logout();  // Call the logout function

        console.log(localStorage.getItem('access_token'));


        // Update authentication state
        setIsAuthenticated(false);

        // Navigate the user to the home page
        navigate('/');

        // Or 
        // Navigate the user to the login page
        // navigate('/login');
    };

    const checkUserStatus = async () => {
        try {
            const token = await getValidToken();
            if (token) {
                const response = await app.get('user-status/', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                
                if (response.data.isAuthenticated) {
                    setIsAuthenticated(true);
                    setUsername(response.data.username);
                    setMessage(`Welcome back, ${response.data.username}`);
                } else {
                    setIsAuthenticated(false);
                    setMessage('User is not authenticated');
                }
            }
        } catch (error) {
            console.error('Error checking user status:', error);
            setIsAuthenticated(false);
            setMessage('Error checking user status');
        }
    };

    // Check user authentication when component mounts
    useEffect(() => {
        checkUserStatus();
    }, [navigate]);  // Trigger checkUserStatus on every navigation
    

    return (
        <nav className="fixed top-0 left-0 w-screen z-50 bg-transparent text-white">
            <div className="container mx-auto flex justify-between items-center px-6 py-4 backdrop-blur-md bg-white/10 border-b border-white/20 rounded-xl">
                <div className="flex items-center">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4AiZ2vu67jP70-IkkA24VgbxNJm5llUlpCvxJSbQfHTnNgUSAQpMb9-pOo4y1JOT6N1k&usqp=CAU"
                        alt="Logo"
                        className="w-12 h-12 rounded-full"
                    />
                    <span className="ml-3 text-2xl font-bold tracking-wide bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Satya-Scan</span>
                </div>

                <div className="flex items-center space-x-8">
                    <button onClick={goToDetectPage} className="relative font-semibold py-2 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 shadow-lg transition-all duration-300">
                        Detect Deep-Fakes
                    </button>

                    <a href="/AboutUs" className="relative font-semibold text-lg py-2 transition-colors duration-300 hover:text-pink-500">
                        About Us
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
                    </a>
                    <a href="/Research" className="relative font-semibold text-lg py-2 transition-colors duration-300 hover:text-pink-500">
                        Resources
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
                    </a>
                    {isAuthenticated ? (
                        <>
                            <div className="relative flex items-center space-x-4">
                                <FaUserCircle className="text-pink-500" size={40} />
                                <span className="text-lg font-semibold">{username}</span>
                            </div>
                            <button onClick={handleLogout} className="relative font-semibold py-2 px-6 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300 shadow-lg">
                                Log Out
                            </button>
                        </>
                    ) : (
                        <button onClick={goToLogin} className="relative font-semibold py-2 px-6 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-300 shadow-lg">
                            Sign Up
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};
export default Navbar;