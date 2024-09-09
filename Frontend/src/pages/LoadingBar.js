import React, { useState, useEffect } from 'react';

const LoadingBar = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = Math.min(prev + 1, 100);
          if (newProgress >= 30 && newProgress < 50) {
            setStatusText('Converting frame');
          } else if (newProgress >= 50 && newProgress < 90) {
            setStatusText('Applying deepfake techniques');
          } else if (newProgress >= 90) {
            setStatusText('Detecting deepfakes');
          }
          if (newProgress === 100) {
            setStatusText('Report is ready');
            clearInterval(interval);
          }
          return newProgress;
        });
      }, 50);

      return () => clearInterval(interval);
    } else {
      setProgress(0); // Reset progress when not loading
    }
  }, [isLoading]);

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <div className="relative w-full h-6 bg-gray-300 rounded-full shadow-lg">
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
          style={{ width: `${progress}%`, transition: 'width 0.5s ease-in-out' }}
        />
        <span className="absolute right-4 top-0 text-sm font-bold text-gray-800">
          {progress}%
        </span>
      </div>
      <div className="mt-2 text-center text-gray-400 font-semibold">
        {statusText}
      </div>
    </div>
  );
};

export default LoadingBar;
