import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos, rápidos y optimizados para tu negocio.',
      icon: '🌐',
      price: 'Desde $500',
      features: ['Responsive Design', 'SEO Optimizado', 'Panel de Admin']
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas e híbridas para iOS y Android que conectan con tus usuarios.',
      icon: '📱',
      price: 'Desde $1,200',
      features: ['iOS & Android', 'UI/UX Premium', 'Notificaciones Push']
    },
    {
      title: 'E-commerce',
      description: 'Tiendas online completas con sistemas de pago y gestión de inventario.',
      icon: '🛒',
      price: 'Desde $800',
      features: ['Pagos Seguros', 'Gestión Stock', 'Dashboard Ventas']
    },
    {
      title: '[TU SERVICIO PERSONALIZADO]', // PERSONALIZAR
      description: '[DESCRIPCIÓN DE TU SERVICIO]',
      icon: '🎯',
      price: 'Desde $XXX',
      features: ['Feature 1', 'Feature 2', 'Feature 3']
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para hacer crecer tu negocio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
              {/* Icono */}
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              
              {/* Título y precio */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {service.price}
                </div>
              </div>
              
              {/* Descripción */}
              <p className="text-gray-600 text-sm mb-4 text-center">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Botón */}
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Cotizar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;