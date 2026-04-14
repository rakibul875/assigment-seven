import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-6">
            
            <div className="text-center max-w-xl">
                
                {/* Animated 404 */}
                <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text animate-pulse">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-semibold mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-gray-400 mt-3">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    
                    <Link to="/">
                        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-lg transition-all duration-300">
                            🏠 Back to Home
                        </button>
                    </Link>

                    <button 
                        onClick={() => window.history.back()}
                        className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                    >
                        🔙 Go Back
                    </button>

                </div>

                {/* Decorative Glow */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

            </div>
        </div>
    );
};

export default ErrorPage;