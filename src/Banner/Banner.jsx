import React from "react";

const Banner = ({ inProgress = 0, resolved = 0 }) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        <div className="text-center text-gray-800 mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            Support Zone
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-2xl text-gray-600">
            Track and manage customer tickets easily
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

         <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-purple-700 rounded-2xl p-12 text-center text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <p className="text-base sm:text-xl mb-2">In-Progress</p>
            <h2 className="text-4xl sm:text-6xl font-bold">{inProgress}</h2>
          </div>

        <div className="bg-linear-to-r from-green-400 via-green-500 to-green-600 rounded-2xl p-12 text-center text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <p className="text-base sm:text-xl mb-2">Resolved</p>
            <h2 className="text-4xl sm:text-6xl font-bold">{resolved}</h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;