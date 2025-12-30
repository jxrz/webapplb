import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

const Resources = () => {
  return (
    <MainLayout>
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Recursos</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Información y tendencias para potenciar tu negocio.
        </p>
      </div>
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-lg text-gray-600">
          [Blog y Material Descargable Próximamente]
        </p>
      </div>
    </MainLayout>
  );
};

export default Resources;
