import React from 'react';
import miImagen from "../../assets/travis-scott.jpg";



const Hero = () => {
  return (
    <section className="bg-black text-white py-20 px-6 mt-2">

      <a href={miImagen} target="_blank" rel="noopener noreferrer">
        <img src={miImagen} alt="Mi imagen descargada" className="mx-auto rounded-lg shadow-lg mb-10" />
      </a>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Creamos prendas únicas <span className="text-yellow-300">Con estilo urbano</span>
            </h1>

            <p className="text-xl mb-8 text-blue-100">
              En <span className="font-semibold">imperial</span> 👑 Bienvenido a IMPERIAL 👑
              Donde la moda se convierte en poder. No solo vendemos ropa, construimos identidad. Cada prenda es un
              manifiesto para los que viven con actitud, estilo y autenticidad.
              <br /><br />
              🔥 Imperial no es moda, es dominio.
              En nuestras colecciones encontrarás el equilibrio perfecto entre streetwear, elegancia urbana y detalles que marcan la diferencia.
              <br /><br />
              ✔ Prendas únicas para quienes imponen tendencia.<br />
              ✔ Diseños que reflejan tu esencia, no las reglas.<br />
              ✔ Estilo premium con un toque urbano y real.<br /><br />
              Imperial es para los que no siguen, lideran.
              ¿Estás listo para vestir tu poder?<br />
              ✨ Sé parte del imperio.
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-blue-200">Diseños</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">100%</div>
                <div className="text-sm text-blue-200">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">1.1</div>
                <div className="text-sm text-blue-200">Calidad</div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex space-x-4">
              <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200">
                Laboratorio de Diseños
              </button>
            </div>
          </div>

          {/* Ilustración/Gráfico */}
          <div className="text-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white bg-opacity-10 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
                <div className="text-8xl">💥</div>
              </div>

              {/* Elementos flotantes */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center animate-bounce">
                <span className="text-2xl">💡</span>
              </div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-400 rounded-lg flex items-center justify-center animate-pulse">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
