import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import PortfolioCarousel from '@/components/ui/PortfolioCarousel';

const Portfolio = () => {
  return (
    <MainLayout>
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Portafolio</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Nuestra selección de marcas y productos premium.
        </p>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <PortfolioCarousel />
      </div>
    </MainLayout>
  );
};

export default Portfolio;
