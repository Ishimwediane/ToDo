import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg mb-8">
            <h1 className="text-4xl font-bold mb-4">
                Plan Your Success Journey
            </h1>
            <p className="text-xl opacity-90">
                Break down your goals into manageable tasks and watch your dreams become reality
            </p>
        </div>
    );
};

export default Hero; 