import React from 'react';
import AboutUs from '../components/sections/AboutUs';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-green-100">
            Conoce nuestra historia y equipo
          </p>
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default AboutPage;