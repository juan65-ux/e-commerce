import React from 'react';

const Services = () => {
  const services = [
    
    {
      title: 'Prendas superiores',
      description: 'Camisetas gráficas / estampadas , Polos oversize ,Hoodies (sudaderas con capucha) , Sweatshirts (sudaderas sin capucha), Chaquetas bomber , Camisas tipo leñador / cuadros, Crop tops urbanos , Tank tops / Muscle tees.',
      icon: '🔥',
      features: ['Ediciones Premium', 'Materiales top: algodón pesado, denim japonés, french terry', 'Costuras dobles o reforzadas, Hecho a mano'] ,
    },
    {
      title: 'Prendas Inferiores',
      description: 'Jeans rotos / desgastados ,Joggers / pantalones deportivos , Cargo pants , Shorts oversize , Bermudas estilo urbano',
      icon: '👖',
      features: ['Ediciones Premium', 'Materiales top: algodón pesado, denim japonés, french terry', 'Costuras dobles o reforzadas, Hecho a mano'] ,
    },
    {
      title: 'Calzado Urbano',
      description: 'Zapatillas tipo sneakers , Botas urbanas / de combate , Zapatos chunky (voluminosos)',
      icon: '👟',
      features: ['Ediciones Premium', 'Materiales top: Microfibra premium: imita el cuero, es resistente y ecológico.', 'TPU (poliuretano termoplástico): zapatillas con diseño futurista, suela envolvente o soportes, Materiales reflectivos o con tecnología 3M'] ,
    },
    {
      title: 'Estilos Urbanos por Inspiración', // PERSONALIZAR
      description: 'Skater , Hip-Hop , Trap / Reggaetón , Graffiti / Arte urbano , Techwear (futurista, táctico)',
      icon: '💥',
      features: ['Ediciones Premium', 'Materiales top: algodón pesado, denim japonés, french terry', 'Costuras dobles o reforzadas, Hecho a mano'] ,
    }
  ];

  return (
    
     <section className="py-16 px-6 bg-gradient-to-r from-blue-950 to-black text-white">

<div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">
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
                😵‍💫
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;