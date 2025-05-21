import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="text-center">
        <div className="relative inline-flex">
          <div className="w-16 h-16 bg-primary-500 rounded-full opacity-75 animate-ping"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <svg className="w-10 h-10 text-primary-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
              />
            </svg>
          </div>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-neutral-800 dark:text-white">Loading...</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">Please wait while we prepare your dashboard</p>
      </div>
    </div>
  );
};

export default LoadingScreen;