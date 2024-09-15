// tokenHelper.js
import app from './axiosConfig';
import {jwtDecode} from 'jwt-decode';

export const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return Date.now() >= decodedToken.exp * 1000;
  } catch (error) {
    console.error('Token decoding failed:', error);
    return true; // If decoding fails, assume token is invalid/expired
  }
};

export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) throw new Error('No refresh token found');

    const response = await app.post('refresh-token/', {}, {
      headers: { Authorization: `Bearer ${refreshToken}` }
    });
    
    const newAccessToken = response.data.access_token;
    localStorage.setItem('access_token', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('Token refresh failed:', error);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    throw error;
  }
};

export const getValidToken = async () => {
  let token = localStorage.getItem('access_token');
  if (!token || isTokenExpired(token)) {
    token = await refreshToken();
  }
  return token;
};

export function logout() {
    // Remove the tokens from localStorage or sessionStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  
    // Optionally clear other user-related data from localStorage/sessionStorage
    // localStorage.removeItem('userInfo');
  
    // Redirect user to the login page or home page
    // window.location.href = '/login'; 
  }
