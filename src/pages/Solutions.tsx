import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

const Solutions = () => {
  return (
    <MainLayout>
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Soluciones B2B</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Estrategias adaptadas para cada canal de distribución.
        </p>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center">
           <h2 className="text-3xl font-bold mb-4 text-gray-900">Oportunidades del Mercado</h2>
           <p className="text-lg text-gray-600">
             La demanda por productos asiáticos no es una moda pasajera, sino parte de un movimiento cultural global. Nos dirigimos a jóvenes-adultos (18-35 años) urbanos y digitales que buscan nuevas experiencias y sabores auténticos.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-lb-primary/10 rounded-lg flex items-center justify-center text-lb-primary mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Cadenas Comerciales</h3>
            <p className="text-gray-600 mb-4">Capitaliza la popularización de la cultura asiática. Ofrecemos un catálogo especializado que convierte el pasillo en un destino de compra recurrente, aumentando el tráfico y el cross-selling.</p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center gap-2">✓ Surtido especializado</li>
              <li className="flex items-center gap-2">✓ Category Management</li>
              <li className="flex items-center gap-2">✓ Logística nacional</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-lb-secondary/10 rounded-lg flex items-center justify-center text-lb-secondary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/><path d="M15 7h6v6"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Mayoreo y Food Service</h3>
            <p className="text-gray-600 mb-4">Abastecimiento constante para mayoristas y restaurantes coreanos a nivel nacional. Formatos institucionales y precios competitivos para maximizar tu margen.</p>
             <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center gap-2">✓ Precios por volumen</li>
              <li className="flex items-center gap-2">✓ Autenticidad garantizada</li>
              <li className="flex items-center gap-2">✓ Abasto confiable</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
             <div className="w-12 h-12 bg-lb-accent/10 rounded-lg flex items-center justify-center text-lb-accent mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Tiendas Especializadas</h3>
            <p className="text-gray-600 mb-4">Curaduría de productos auténticos y tendencias de mercado para cautivar a clientes que buscan una conexión cultural real.</p>
             <ul className="text-sm text-gray-500 space-y-2">
              <li className="flex items-center gap-2">✓ Productos en tendencia</li>
              <li className="flex items-center gap-2">✓ Marcas exclusivas</li>
              <li className="flex items-center gap-2">✓ Soporte en punto de venta</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Solutions;
