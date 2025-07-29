import React, { useState } from 'react';
       import { NavLink } from 'react-router-dom';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('inicio');

  const menuItems = [
  { id: 'inicio', label: 'Inicio', path: '/' },
  { id: 'servicios', label: 'Servicios', path: '/servicios' },
  { id: 'nosotros', label: 'Nosotros', path: '/nosotros' },
  { id: 'contacto', label: 'Contacto', path: '/contacto' },
  { id: 'tienda', label: 'Tienda', path: '/tienda' }
];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo empresarial */}
          
          <NavLink to="/" className="flex items-center space-x-3">
           <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
             <span className="text-white font-bold text-xl">💻</span>
           </div>
           <div>
             <div className="text-xl font-bold text-gray-800">
               IMPERIAL
             </div>
             <div className="text-xs text-gray-500">
               MODA URBANA
             </div>
           </div>
</NavLink>
          
          {/* Menú de navegación */}
          <ul className="flex space-x-8">
           {menuItems.map((item) => (
  <li key={item.id}>
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors duration-200 ${
          isActive
            ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
            : 'text-gray-600 hover:text-blue-500'
        }`
      }
    >
      {item.label}
    </NavLink>
  </li>
))}
          </ul>

          {/* Botón CTA */}
          <NavLink 
                 to="/contacto"
                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
               >
                 Cotizar Proyecto
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;