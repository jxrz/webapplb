import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

const Portfolio = () => {
  return (
    <MainLayout>
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Portafolio</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Nuestra selección de marcas y productos premium.
        </p>
      </div>
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-600">
          [Catálogo interactivo en construcción - Próximamente filtros por categoría y marca]
        </p>
      </div>
    </MainLayout>
  );
};

export default Portfolio;
