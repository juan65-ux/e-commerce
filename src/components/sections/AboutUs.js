import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Sobre <span className="text-blue-600">[NOMBRE DE TU EMPRESA]</span>
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              [ESCRIBE LA HISTORIA DE TU EMPRESA]
              {/* Ejemplo: Somos una empresa joven y dinámica especializada en desarrollo 
                  de soluciones tecnológicas innovadoras. Fundada en 2025, nuestro objetivo 
                  es democratizar la tecnología para empresas de todos los tamaños. */}
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              [CONTINÚA LA HISTORIA]
              {/* Ejemplo: Nuestro equipo de expertos combina creatividad y experiencia técnica 
                  para entregar proyectos que superan las expectativas de nuestros clientes. */}
            </p>
            
            {/* Valores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold text-blue-600">Innovación</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🤝</div>
                <div className="font-semibold text-green-600">Confianza</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-purple-600">Agilidad</div>
              </div>
            </div>
          </div>
          
          {/* Métricas empresariales */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Proyectos Completados</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-green-100">Clientes Satisfechos</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Proyectos a Tiempo</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-yellow-100">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
