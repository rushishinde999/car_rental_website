import React from "react";
import { MdHeight } from "react-icons/md";

const Hero = () => {
  return (
    <section
      className="hero bg-cover bg-center h-screen text-white"
      style={{
        backgroundImage:
          "url(https://tse4.mm.bing.net/th?id=OIP.T8IuvKFoovkCW_iKimJ0-gHaE8&pid=Api&P=0&h=180)",
      }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Car Rental</h1>
        <p className="text-xl mb-8">Find your perfect car for any occasion</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full">
          Book Now
        </button>
      </div>
    </section>
  );
};
export default Hero;
