import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <MainLayout>
      <div className="bg-gray-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto / Cotizar</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          ¿Listo para llevar los mejores productos asiáticos a tu negocio?
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Hablemos de negocios</h2>
            <p className="text-gray-600 mb-8">
              Complete el formulario y uno de nuestros ejecutivos comerciales se pondrá en contacto con usted en menos de 24 horas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-lb-primary/10 p-3 rounded-full text-lb-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ubicación</h3>
                  <p className="text-gray-600">Bolívar 219, Int. 102, Col. Obrera, Cuauhtémoc, 06800 CDMX.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-lb-primary/10 p-3 rounded-full text-lb-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">(55) 5578-7863</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-lb-primary/10 p-3 rounded-full text-lb-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">ventaslbasianfood1@gmail.com</p>
                  <p className="text-gray-600">venta.cadenalb@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lb-primary focus:border-transparent outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lb-primary focus:border-transparent outline-none transition-all" placeholder="Su Empresa S.A." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Negocio</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lb-primary focus:border-transparent outline-none transition-all bg-white">
                  <option>Seleccione una opción</option>
                  <option>Cadena Comercial / Retail</option>
                  <option>Mayorista</option>
                  <option>Tienda Especializada</option>
                  <option>Restaurante / Food Service</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lb-primary focus:border-transparent outline-none transition-all" placeholder="juan@empresa.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lb-primary focus:border-transparent outline-none transition-all" placeholder="(55) 1234 5678" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lb-primary focus:border-transparent outline-none transition-all" placeholder="Cuéntenos sobre sus necesidades..."></textarea>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
