import React from 'react';
import Services from '../components/sections/Services';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-blue-100">
            Soluciones tecnológicas completas para tu empresa
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;