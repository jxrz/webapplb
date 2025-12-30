import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

const Brands = () => {
  return (
    <MainLayout>
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Marcas</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Representamos a los líderes del mercado asiático.
        </p>
      </div>
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Trabajamos directamente con las marcas más reconocidas de Corea y Asia para traer lo mejor a tu negocio.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {['Lotte', 'Nongshim', 'Paldo', 'Samjin', 'HY', 'Samyang', 'CJ'].map((brand) => (
              <div key={brand} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-all">
                 {/* Placeholder for brand logos - replace with actual images */}
                 <span className="text-xl font-bold text-gray-400">{brand}</span>
              </div>
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Brands;
