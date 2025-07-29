import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Información de la empresa */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">💻</span>
              </div>
              <div>
                <div className="text-xl font-bold">Imperial</div>
                <div className="text-sm text-gray-400"></div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. 
              Tu éxito es nuestro compromiso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                📘
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                💬
              </a>
              <a href="#" className="bg-purple-600 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200">
                📷
              </a>
            </div>
          </div>
          
          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Apps Móviles</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">E-commerce</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Consultoría</a></li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 [EMAIL-CORPORATIVO]</li>
              <li>📱 +57 (XXX) XXX-XXXX</li>
              <li>📍 [TU CIUDAD], Colombia</li>
              <li>🕒 Lun - Vie: 8AM - 6PM</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 [NOMBRE DE TU EMPRESA]. Todos los derechos reservados. 
            Desarrollado con ❤️ y React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;