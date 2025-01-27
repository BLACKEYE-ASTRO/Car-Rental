import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-4 md:p-8">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Premium Car Rental in Your Area
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-0 md:pr-20 mt-5">
          Book the selected car effortlessly. Pay for driving only. Book the car now.
        </h2>
        <button className="p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-105 transition-all">
          Explore Cars
        </button>
      </div>

      <div className="relative w-full h-[400px] bg-[url('/hero-bg.png')] bg-contain bg-no-repeat bg-center flex justify-start ">
        <Image
          src="/hero.png"
          alt="Luxury car available for rental"
          width={600}
          height={600}
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
