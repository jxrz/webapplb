import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nosotros</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Conectando culturas a través de la gastronomía.
        </p>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 border-l-4 border-lb-primary pl-4">Quiénes Somos</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            LB Asian Food, con sede en Ciudad de México, cuenta con más de 10 años de experiencia en la importación directa y comercialización de productos asiáticos, con un fuerte enfoque en la gastronomía coreana.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Desde nuestros inicios en 2014, hemos colaborado con marcas líderes como <span className="font-semibold text-gray-800">Lotte, Nongshim, Paldo, Samjin, HY, Samyang y CJ</span>, consolidando alianzas que fortalecen un portafolio con productos reconocidos a nivel internacional.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Actualmente, operamos en tres canales estratégicos: <span className="font-semibold text-lb-secondary">mayoreo, tiendas propias AsiaOn Mart y distribución a cadenas comerciales</span>, con una estructura sólida para el abastecimiento, la logística y la ejecución comercial a escala internacional.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-inner border border-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Mensaje del CEO</h2>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl text-gray-700 italic font-light mb-8">
              "En LB Asian Food reafirmamos nuestro compromiso con la calidad y la excelencia, trabajando de la mano con nuestros valiosos socios comerciales. Nuestro crecimiento ha sido posible gracias a la confianza de nuestros clientes y al esfuerzo de un equipo apasionado que día a día busca seguir expandiendo horizontes, acercando lo mejor de Asia."
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-1 bg-lb-primary mb-4 rounded-full"></div>
              <h4 className="text-xl font-bold text-gray-900">SangYk Lee</h4>
              <p className="text-gray-500 font-medium">CEO, LB Asian Food</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
