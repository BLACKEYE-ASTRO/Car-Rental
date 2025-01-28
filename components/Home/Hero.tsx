  import Image from 'next/image';
  import React from 'react';

  const Hero = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Premium Car Rental in Your Area</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-lg">
            Book the selected car effortlessly. Pay for driving only. Book the car now.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 hover:scale-105 transform">
            Explore Cars
          </button>
        </div>

        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
          <div className="hero__image-overlay " />
        </div>
      </div>
    );
  };

  export default Hero;
